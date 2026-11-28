import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3mgyctug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3mgyctug"/>`,
		"fallback": "iconaut:key-solid",
	});
}

export default Component;
