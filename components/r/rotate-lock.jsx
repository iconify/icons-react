import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q24_9dbcg.css';
import '../../css/m/mw9pchp5k.css';
import '../../css/e/e-j42-uyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="q24_9dbcg"/><path class="mw9pchp5k"/><path class="e-j42-uyq"/></g>`,
		"fallback": "andrsrxn:rotate-lock",
	});
}

export default Component;
