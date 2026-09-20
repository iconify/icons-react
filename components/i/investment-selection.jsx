import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ass6e81jg.css';
import '../../css/s/sg51o_29b.css';
import '../../css/c/c22r8l25g.css';
import '../../css/o/opu36u-ju.css';
import '../../css/r/rdxghtyzz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ass6e81jg"/><path class="sg51o_29b"/><path class="c22r8l25g"/><path class="opu36u-ju"/><path class="rdxghtyzz"/></g>`,
		"fallback": "streamline-color:investment-selection",
	});
}

export default Component;
