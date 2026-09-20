import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxix2hbyo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxix2hbyo"/>`,
		"fallback": "la:truck-monster-solid",
	});
}

export default Component;
