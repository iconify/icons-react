import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a25qwvb6t.css';
import '../../css/g/gep1q1bhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a25qwvb6t"/><path class="gep1q1bhk"/></g>`,
		"fallback": "solar:panel-bottom-broken",
	});
}

export default Component;
