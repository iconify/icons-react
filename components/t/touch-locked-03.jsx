import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u9sptzr_f.css';
import '../../css/w/wfd123b6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="u9sptzr_f"/><path class="wfd123b6b"/></g>`,
		"fallback": "hugeicons:touch-locked-03",
	});
}

export default Component;
