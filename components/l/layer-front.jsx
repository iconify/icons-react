import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_q55v8sj.css';
import '../../css/f/fzc7prgyb.css';
import '../../css/z/zf033mbgd.css';
import '../../css/p/pzv7a46ve.css';
import '../../css/q/qe0if_bpj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c_q55v8sj"/><path clip-rule="evenodd" class="fzc7prgyb"/><path clip-rule="evenodd" class="zf033mbgd"/><path clip-rule="evenodd" class="pzv7a46ve"/><path class="qe0if_bpj"/></g>`,
		"fallback": "glyphs-poly:layer-front",
	});
}

export default Component;
