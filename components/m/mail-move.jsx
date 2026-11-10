import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rbge63uxc.css';
import '../../css/l/lfq6rtbwj.css';
import '../../css/x/xejt-hacc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rbge63uxc"/><path class="lfq6rtbwj"/><path class="xejt-hacc"/></g>`,
		"fallback": "andrsrxn:mail-move",
	});
}

export default Component;
