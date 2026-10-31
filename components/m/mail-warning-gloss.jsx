import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k0111cchf.css';
import '../../css/x/xa58q1izi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="k0111cchf wm-k"/><path class="wm-s xa58q1izi"/></g>`,
		"fallback": "withicons:mail-warning-gloss",
	});
}

export default Component;
