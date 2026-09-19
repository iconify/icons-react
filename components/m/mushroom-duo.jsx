import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m-2eksdvx.css';
import '../../css/j/j53yb7_dq.css';
import '../../css/d/dcx_pp3cp.css';
import '../../css/k/k--9gdclz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m-2eksdvx"/><path class="j53yb7_dq"/><path clip-rule="evenodd" class="dcx_pp3cp"/><path class="k--9gdclz"/></g>`,
		"fallback": "glyphs:mushroom-duo",
	});
}

export default Component;
