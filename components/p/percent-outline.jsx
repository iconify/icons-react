import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l68l_w4ab.css';
import '../../css/u/u8ql_i1-b.css';
import '../../css/m/mc4-2c-lz.css';
import '../../css/b/bvoz1whzo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l68l_w4ab"/><path clip-rule="evenodd" class="u8ql_i1-b"/><path class="mc4-2c-lz"/><path clip-rule="evenodd" class="bvoz1whzo"/></g>`,
		"fallback": "glyphs:percent-outline",
	});
}

export default Component;
