import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/ydu9-nbzw.css';
import '../../css/m/mu3r5sfdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ydu9-nbzw"/><path class="mu3r5sfdg"/></g>`,
		"fallback": "hugeicons:shipping-truck-01",
	});
}

export default Component;
