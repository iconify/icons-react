import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d62hrbclj.css';
import '../../css/t/t2g4dfbck.css';
import '../../css/i/isq34acxh.css';
import '../../css/x/x-e655bfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d62hrbclj wm-k"/><path class="t2g4dfbck wm-k"/><path class="isq34acxh wm-k"/><path class="wm-shine x-e655bfm"/></g>`,
		"fallback": "withicons-anime:minus",
	});
}

export default Component;
