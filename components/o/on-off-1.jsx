import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eluhvw1kg.css';
import '../../css/h/h0dikepah.css';
import '../../css/t/t6893z44m.css';
import '../../css/e/e2eak_byp.css';
import '../../css/p/p0wmsibkj.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eluhvw1kg"/><path class="h0dikepah"/><path class="t6893z44m"/><path class="e2eak_byp"/><path class="p0wmsibkj"/></g>`,
		"fallback": "streamline-stickies-color:on-off-1",
	});
}

export default Component;
