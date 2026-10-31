import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l2g7feb7t.css';
import '../../css/z/z6t643bso.css';
import '../../css/x/x-h5fto7v.css';
import '../../css/x/xc37k5bbs.css';
import '../../css/y/y7b2po80u.css';
import '../../css/i/iogpr0p-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="l2g7feb7t wm-shadow"/><path class="z6t643bso"/><path class="x-h5fto7v"/><path class="wm-s xc37k5bbs"/><path class="wm-s y7b2po80u"/><path class="iogpr0p-d"/></g>`,
		"fallback": "withicons-retro:mistletoe",
	});
}

export default Component;
