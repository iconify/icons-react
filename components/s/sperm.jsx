import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/ree79tbzy.css';
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
		"content": `<g class="hit3bi0-v"><path clip-rule="evenodd" class="ree79tbzy"/><path class="sq_622bov"/><path class="rp1r7sbyy"/></g>`,
		"fallback": "icon-park-solid:sperm",
	});
}

export default Component;
