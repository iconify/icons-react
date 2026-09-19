import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hpv2i1bqe.css';
import '../../css/l/lzoumbbkv.css';
import '../../css/q/qiijr8jch.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hpv2i1bqe"/><path class="lzoumbbkv"/><path class="qiijr8jch"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-in-motorized-wheelchair",
	});
}

export default Component;
