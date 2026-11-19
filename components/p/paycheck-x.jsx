import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qvyytfq2p.css';
import '../../css/e/eccq7qwro.css';
import '../../css/u/u0p3b9bqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qvyytfq2p"/><path class="eccq7qwro"/><path class="u0p3b9bqw"/></g>`,
		"fallback": "andrsrxn:paycheck-x",
	});
}

export default Component;
