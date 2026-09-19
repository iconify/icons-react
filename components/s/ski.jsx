import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dr-uloksa.css';
import '../../css/q/qmm2s1-us.css';
import '../../css/y/yyougvpoy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dr-uloksa"/><path class="qmm2s1-us"/><path class="yyougvpoy"/></g>`,
		"fallback": "hugeicons:ski",
	});
}

export default Component;
