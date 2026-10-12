import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lp3wjfx5u.css';
import '../../css/n/nv7oj2hxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lp3wjfx5u"/><path class="nv7oj2hxx"/></g>`,
		"fallback": "andrsrxn:trade-mark",
	});
}

export default Component;
