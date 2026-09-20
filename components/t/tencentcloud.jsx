import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dxkiu2b7k.css';
import '../../css/y/y2i7scbqh.css';
import '../../css/p/p8-k0bb1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="dxkiu2b7k"/><path class="y2i7scbqh"/><path class="p8-k0bb1k"/></g>`,
		"fallback": "thesvg:tencentcloud",
	});
}

export default Component;
