import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cykxjydxv.css';
import '../../css/y/yn4yn4b1o.css';
import '../../css/w/w1pwh69iw.css';
import '../../css/w/wom2ccbik.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cykxjydxv"/><path class="yn4yn4b1o"/><path class="w1pwh69iw"/><path class="wom2ccbik"/></g>`,
		"fallback": "glyphs:queen-duo",
	});
}

export default Component;
