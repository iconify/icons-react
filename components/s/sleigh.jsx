import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/ti18yabmh.css';
import '../../css/p/p9pn97g5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ti18yabmh"/><path class="p9pn97g5g wm-a"/></g>`,
		"fallback": "withicons:sleigh",
	});
}

export default Component;
