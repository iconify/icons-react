import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m04jkm9ic.css';
import '../../css/c/cx17xhu1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m04jkm9ic"/><path class="cx17xhu1q"/></g>`,
		"fallback": "iconoir:lock-key",
	});
}

export default Component;
