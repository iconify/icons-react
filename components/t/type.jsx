import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qcy8x4mpl.css';
import '../../css/d/dccdxlb0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qcy8x4mpl"/><path class="dccdxlb0m"/></g>`,
		"fallback": "iconoir:type",
	});
}

export default Component;
