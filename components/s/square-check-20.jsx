import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c961mpvnt.css';
import '../../css/f/f_m6gmbzn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c961mpvnt"/><path class="f_m6gmbzn"/>`,
		"fallback": "energy-icons:square-check-20",
	});
}

export default Component;
