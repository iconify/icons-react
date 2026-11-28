import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bctqhabuv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e77ebfb5e.css';
import '../../css/h/hlxla-wwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bctqhabuv secondary"/><g class="dt0cm9dhy primary"><path class="e77ebfb5e"/><path class="hlxla-wwo"/></g>`,
		"fallback": "iconaut:square-dot-duo",
	});
}

export default Component;
