import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zqvdv-i1a.css';
import '../../css/z/zs9rwbb7v.css';
import '../../css/y/y1l26kb-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zqvdv-i1a"/><path class="zs9rwbb7v"/><path class="y1l26kb-v"/></g>`,
		"fallback": "andrsrxn:mountain",
	});
}

export default Component;
