import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u7vjzfbgj.css';
import '../../css/w/w7p5esqwh.css';
import '../../css/r/rbge63uxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u7vjzfbgj"/><path class="w7p5esqwh"/><path class="rbge63uxc"/></g>`,
		"fallback": "andrsrxn:mail-move",
	});
}

export default Component;
