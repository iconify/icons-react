import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n4tyjxbbg.css';
import '../../css/z/z0xxpxv-l.css';
import '../../css/e/engyn55tx.css';
import '../../css/y/yatg6dbvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n4tyjxbbg"/><path clip-rule="evenodd" class="z0xxpxv-l"/><path class="engyn55tx"/><path class="yatg6dbvw"/></g>`,
		"fallback": "andrsrxn:passcode-x",
	});
}

export default Component;
