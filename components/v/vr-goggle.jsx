import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c27cg3h0f.css';
import '../../css/q/qc1xjs51x.css';
import '../../css/q/qv3vwabkc.css';
import '../../css/r/r94-0h_fj.css';

const viewBox = {"width":41,"height":41,"top":-0.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c27cg3h0f"/><path class="qc1xjs51x"/><path class="qv3vwabkc"/><path class="r94-0h_fj"/></g>`,
		"fallback": "streamline-stickies-color:vr-goggle",
	});
}

export default Component;
