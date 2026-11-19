import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ev4ntdbab.css';
import '../../css/y/ynxvfczso.css';
import '../../css/w/w1dv7ab8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ev4ntdbab"/><circle class="ynxvfczso"/><path class="w1dv7ab8f"/></g>`,
		"fallback": "andrsrxn:sun",
	});
}

export default Component;
