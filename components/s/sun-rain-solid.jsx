import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzzd7pb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzzd7pb4f"/>`,
		"fallback": "iconaut:sun-rain-solid",
	});
}

export default Component;
