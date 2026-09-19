import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/ncoptqtus.css';
import '../../css/n/nay63n1ma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ncoptqtus"/><path class="nay63n1ma"/></g>`,
		"fallback": "hugeicons:sent",
	});
}

export default Component;
