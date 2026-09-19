import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f5tatcb3m.css';
import '../../css/c/ct164mbcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="f5tatcb3m"/><path class="ct164mbcm"/></g>`,
		"fallback": "hugeicons:key-round",
	});
}

export default Component;
