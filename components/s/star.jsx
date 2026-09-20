import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/u/uh31r0biy.css';
import '../../css/d/d471ab08e.css';

const viewBox = {"width":41,"height":41,"top":-0.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="uh31r0biy"/><path class="d471ab08e"/></g>`,
		"fallback": "streamline-stickies-color:star",
	});
}

export default Component;
