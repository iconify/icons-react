import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iz3wt3bus.css';
import '../../css/k/kj0pvozbg.css';
import '../../css/g/g8mfzkbax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iz3wt3bus"/><path class="kj0pvozbg"/><path class="g8mfzkbax"/></g>`,
		"fallback": "andrsrxn:paycheck",
	});
}

export default Component;
