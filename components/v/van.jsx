import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b23vqdbdf.css';
import '../../css/f/fle2h5bsn.css';
import '../../css/z/zbj15_b-k.css';
import '../../css/v/vz6f2jbnw.css';
import '../../css/z/zjsy__bjj.css';
import '../../css/l/lz1nthk-n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="b23vqdbdf"/><path class="fle2h5bsn"/><path clip-rule="evenodd" class="zbj15_b-k"/><path class="vz6f2jbnw"/><path class="zjsy__bjj"/><path class="lz1nthk-n"/></g>`,
		"fallback": "glyphs-poly:van",
	});
}

export default Component;
