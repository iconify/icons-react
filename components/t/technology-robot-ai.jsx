import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj674sbcw.css';
import '../../css/y/y2i-3gmxt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj674sbcw"/><path class="y2i-3gmxt"/>`,
		"fallback": "streamline-pixel:technology-robot-ai",
	});
}

export default Component;
