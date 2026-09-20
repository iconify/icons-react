import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dguxuj9xv.css';
import '../../css/h/hu6j50bjd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dguxuj9xv"/><path class="hu6j50bjd"/>`,
		"fallback": "ooui:picture-in-picture",
	});
}

export default Component;
