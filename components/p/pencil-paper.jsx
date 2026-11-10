import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/am3xqac2w.css';
import '../../css/m/muauw4btn.css';
import '../../css/y/y5oedsunc.css';
import '../../css/j/jhcnqwaay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="am3xqac2w"/><path class="muauw4btn"/><path class="y5oedsunc"/><path class="jhcnqwaay"/></g>`,
		"fallback": "andrsrxn:pencil-paper",
	});
}

export default Component;
