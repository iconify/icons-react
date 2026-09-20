import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojt3ipb_q.css';
import '../../css/g/g4jicabdb.css';
import '../../css/r/rfgyosbsq.css';
import '../../css/q/qtvivvozr.css';
import '../../css/e/em-fmczta.css';
import '../../css/j/jlwwu3x5u.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojt3ipb_q"/><path class="g4jicabdb"/><path class="rfgyosbsq"/><g class="qtvivvozr"><path class="em-fmczta"/><path class="jlwwu3x5u"/></g>`,
		"fallback": "openmoji:rightwards-pushing-hand-medium-skin-tone",
	});
}

export default Component;
