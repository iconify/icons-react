import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hc654n61t.css';
import '../../css/g/g0l4wt5qi.css';
import '../../css/t/txtwnjbdf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hc654n61t"/><path clip-rule="evenodd" class="g0l4wt5qi"/><path class="txtwnjbdf"/></g>`,
		"fallback": "glyphs:laptop-cog-bold",
	});
}

export default Component;
