import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/riyq1le5g.css';
import '../../css/j/jg2d7rb2e.css';
import '../../css/h/h0hlueb4p.css';
import '../../css/q/qd5v5yp-p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="riyq1le5g"/><path clip-rule="evenodd" class="jg2d7rb2e"/><path class="h0hlueb4p"/><rect class="qd5v5yp-p"/></g>`,
		"fallback": "glyphs-poly:paste",
	});
}

export default Component;
