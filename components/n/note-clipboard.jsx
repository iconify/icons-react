import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j6hlmh-yv.css';
import '../../css/h/hcj_rqbfu.css';
import '../../css/f/f2xtp8k_j.css';
import '../../css/m/m-r32nl1u.css';
import '../../css/u/uzxdi4bph.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j6hlmh-yv"/><path class="hcj_rqbfu"/><rect class="f2xtp8k_j"/><rect class="m-r32nl1u"/><path class="uzxdi4bph"/></g>`,
		"fallback": "glyphs-poly:note-clipboard",
	});
}

export default Component;
