import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kbqhvbc1j.css';
import '../../css/z/zf7518b8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="kbqhvbc1j wm-k"/><path class="wm-a zf7518b8d"/></g>`,
		"fallback": "withicons:pen-line-gloss",
	});
}

export default Component;
