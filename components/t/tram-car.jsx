import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wfd-nms3v.css';
import '../../css/d/dl8jnmb1k.css';
import '../../css/d/dwvheybtr.css';
import '../../css/q/q_fjz5x6d.css';
import '../../css/e/ehzu5kb7b.css';
import '../../css/n/nk1l2sb5z.css';
import '../../css/a/a5ljsxbtf.css';
import '../../css/e/e5chqhgyy.css';
import '../../css/v/v0ls22b5e.css';
import '../../css/o/oa44ju5bt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wfd-nms3v"/><path class="dl8jnmb1k"/><path class="dwvheybtr"/><path class="q_fjz5x6d"/><path class="ehzu5kb7b"/><path class="nk1l2sb5z"/><path class="a5ljsxbtf"/><path class="e5chqhgyy"/><path class="v0ls22b5e"/><path class="oa44ju5bt"/></g>`,
		"fallback": "fluent-emoji-flat:tram-car",
	});
}

export default Component;
