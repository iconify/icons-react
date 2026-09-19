import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e7enxrbua.css';
import '../../css/i/i0-tdxm2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="e7enxrbua"/><path class="i0-tdxm2y"/></g>`,
		"fallback": "iconoir:mail-opened",
	});
}

export default Component;
