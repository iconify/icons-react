import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yf5xtnrqh.css';
import '../../css/f/f45mp1b7q.css';
import '../../css/j/jfffpyiud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yf5xtnrqh"/><path class="f45mp1b7q"/><path class="jfffpyiud"/></g>`,
		"fallback": "hugeicons:repair",
	});
}

export default Component;
