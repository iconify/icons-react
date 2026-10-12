import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c3jzujlrk.css';
import '../../css/e/evm8hfb2r.css';
import '../../css/v/vy6lcccai.css';
import '../../css/h/h6o5jc4pv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c3jzujlrk"/><path class="evm8hfb2r"/><path class="vy6lcccai"/><path class="h6o5jc4pv"/></g>`,
		"fallback": "andrsrxn:user",
	});
}

export default Component;
