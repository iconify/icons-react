import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi9lztnms.css';
import '../../css/r/rxeophjsa.css';
import '../../css/x/xt6quub6f.css';
import '../../css/i/i2hidl1ie.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/u/um08tbcnl.css';
import '../../css/o/ojalnybme.css';
import '../../css/j/javsus1mr.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="fi9lztnms"><path class="rxeophjsa"/><path class="xt6quub6f"/><path class="i2hidl1ie"/></g><g class="ij2x_72vy"><path class="um08tbcnl"/><path class="ojalnybme"/><path class="javsus1mr"/></g>`,
		"fallback": "openmoji:t-rex",
	});
}

export default Component;
