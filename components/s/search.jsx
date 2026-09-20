import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/u/uniwrcbvr.css';
import '../../css/s/swkpvtp1u.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><circle class="uniwrcbvr"/><path class="swkpvtp1u"/></g>`,
		"fallback": "system-uicons:search",
	});
}

export default Component;
