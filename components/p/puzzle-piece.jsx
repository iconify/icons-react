import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx6cf-bmk.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx6cf-bmk"/>`,
		"fallback": "oi:puzzle-piece",
	});
}

export default Component;
