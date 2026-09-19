import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhtkhwboa.css';
import '../../css/z/z600ygqlh.css';
import '../../css/o/ouq7y6d3w.css';
import '../../css/x/xfsflobmm.css';
import '../../css/f/fls75h9qh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhtkhwboa"/><path class="z600ygqlh"/><g class="ouq7y6d3w"><circle class="xfsflobmm"/><path class="fls75h9qh"/></g>`,
		"fallback": "flat-color-icons:mms",
	});
}

export default Component;
