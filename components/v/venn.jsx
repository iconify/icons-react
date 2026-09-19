import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ehp-zsmgk.css';
import '../../css/k/kgb4k9beb.css';
import '../../css/o/o0lxulbvo.css';
import '../../css/i/iwtfx8bgl.css';
import '../../css/q/qn9vpab8l.css';
import '../../css/f/f1v2nbs_m.css';
import '../../css/q/qnbgnf7_s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ehp-zsmgk"/><path class="kgb4k9beb"/><path class="o0lxulbvo"/><path class="iwtfx8bgl"/><path class="qn9vpab8l"/><path class="f1v2nbs_m"/><path class="qnbgnf7_s"/></g>`,
		"fallback": "glyphs-poly:venn",
	});
}

export default Component;
