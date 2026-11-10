import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t1vmkgcbq.css';
import '../../css/q/ql2yavboj.css';
import '../../css/r/rge-_aczw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t1vmkgcbq"/><path class="ql2yavboj"/><path class="rge-_aczw"/></g>`,
		"fallback": "andrsrxn:volume-off",
	});
}

export default Component;
