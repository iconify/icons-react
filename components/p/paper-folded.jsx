import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/h/hs5vo2r3v.css';
import '../../css/x/xvj_y6bjg.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="hs5vo2r3v"/><path class="xvj_y6bjg"/></g>`,
		"fallback": "system-uicons:paper-folded",
	});
}

export default Component;
