import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r3hmpab7s.css';
import '../../css/h/hq-wbibec.css';
import '../../css/o/o_k6lcc5g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r3hmpab7s"/><path clip-rule="evenodd" class="hq-wbibec"/><path class="o_k6lcc5g"/></g>`,
		"fallback": "glyphs:playback-speed-bold",
	});
}

export default Component;
