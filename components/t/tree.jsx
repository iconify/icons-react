import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xzfx_kbpp.css';
import '../../css/q/qn5kscbsg.css';
import '../../css/h/h_m7exbzz.css';
import '../../css/u/ugjqc-bch.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xzfx_kbpp"/><path class="qn5kscbsg"/><path clip-rule="evenodd" class="h_m7exbzz"/><path class="ugjqc-bch"/></g>`,
		"fallback": "glyphs-poly:tree",
	});
}

export default Component;
