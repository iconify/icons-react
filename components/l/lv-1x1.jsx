import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/erzf03bmv.css';
import '../../css/w/wmyfswd2k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="erzf03bmv"/><path class="wmyfswd2k"/></g>`,
		"fallback": "flag:lv-1x1",
	});
}

export default Component;
