import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-_z0bbmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-_z0bbmv"/>`,
		"fallback": "thesvg-color:sparkpost",
	});
}

export default Component;
