import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cdbbm841l.css';
import '../../css/e/esqy88r2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cdbbm841l"/><path class="esqy88r2m"/></g>`,
		"fallback": "iconoir:suggestion",
	});
}

export default Component;
