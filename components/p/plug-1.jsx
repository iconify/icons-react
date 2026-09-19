import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xoj2elb8b.css';
import '../../css/g/g_k_kr9gw.css';
import '../../css/i/i__dg_qho.css';
import '../../css/j/jfvi6mjut.css';
import '../../css/h/hs_4g2ita.css';
import '../../css/l/lvlpeacto.css';
import '../../css/j/ji0-_mvfl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xoj2elb8b"/><path clip-rule="evenodd" class="g_k_kr9gw"/><path class="i__dg_qho"/><path clip-rule="evenodd" class="jfvi6mjut"/><path class="hs_4g2ita"/><path clip-rule="evenodd" class="lvlpeacto"/><path class="ji0-_mvfl"/></g>`,
		"fallback": "glyphs-poly:plug-1",
	});
}

export default Component;
