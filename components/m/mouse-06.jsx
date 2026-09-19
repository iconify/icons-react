import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kpn67l18v.css';
import '../../css/o/otc11ybpz.css';
import '../../css/c/cqkzxjbmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kpn67l18v"/><path class="otc11ybpz"/><path class="cqkzxjbmj"/></g>`,
		"fallback": "hugeicons:mouse-06",
	});
}

export default Component;
