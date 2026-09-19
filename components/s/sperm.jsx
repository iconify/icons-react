import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/l2iib5bto.css';
import '../../css/s/sq_622bov.css';
import '../../css/r/rp1r7sbyy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path clip-rule="evenodd" class="l2iib5bto"/><path class="sq_622bov"/><path class="rp1r7sbyy"/></g>`,
		"fallback": "icon-park-outline:sperm",
	});
}

export default Component;
