import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hkjgs7b4v.css';
import '../../css/y/ys41-gbgp.css';
import '../../css/z/z0bu-ib7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hkjgs7b4v"/><path class="ys41-gbgp"/><path class="z0bu-ib7r"/></g>`,
		"fallback": "hugeicons:tic-tac-toe",
	});
}

export default Component;
