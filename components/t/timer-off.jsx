import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-5gahbyk.css';
import '../../css/k/kl994znex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="i-5gahbyk"/><path class="kl994znex"/></g>`,
		"fallback": "andrsrxn:timer-off",
	});
}

export default Component;
