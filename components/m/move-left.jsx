import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f8yqsxb0s.css';
import '../../css/s/s_tc5kb4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle transform="matrix(-1 0 0 1 22 9)" class="f8yqsxb0s"/><path class="s_tc5kb4m"/></g>`,
		"fallback": "hugeicons:move-left",
	});
}

export default Component;
