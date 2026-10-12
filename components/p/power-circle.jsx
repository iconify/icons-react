import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kqn0rlbqd.css';
import '../../css/y/ymtmr1bse.css';
import '../../css/j/jzhlgaceu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kqn0rlbqd"/><path class="ymtmr1bse"/><path class="jzhlgaceu"/></g>`,
		"fallback": "andrsrxn:power-circle",
	});
}

export default Component;
