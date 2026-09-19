import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oze6jsybx.css';
import '../../css/z/zu_amvtay.css';
import '../../css/m/mqm_betay.css';
import '../../css/y/yano2qblk.css';
import '../../css/h/hrnojc6mh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oze6jsybx"/><path clip-rule="evenodd" class="zu_amvtay"/><path class="mqm_betay"/><path clip-rule="evenodd" class="yano2qblk"/><path class="hrnojc6mh"/></g>`,
		"fallback": "glyphs:layer-back-bold",
	});
}

export default Component;
