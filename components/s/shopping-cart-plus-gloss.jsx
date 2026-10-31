import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cvn4__-zg.css';
import '../../css/y/ylau8qb1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="cvn4__-zg wm-k"/><path class="wm-a ylau8qb1p"/></g>`,
		"fallback": "withicons:shopping-cart-plus-gloss",
	});
}

export default Component;
