import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qn56i8hoh.css';
import '../../css/i/ig7og-50b.css';
import '../../css/y/yrj14-05o.css';
import '../../css/o/o4bl2dbsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qn56i8hoh"/><path class="ig7og-50b"/><path class="yrj14-05o"/><path class="o4bl2dbsi"/></g>`,
		"fallback": "andrsrxn:trend-up-square",
	});
}

export default Component;
