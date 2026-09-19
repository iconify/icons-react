import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/iidlc_bzb.css';
import '../../css/x/x1tloy_uw.css';
import '../../css/c/c8bbmgmhk.css';
import '../../css/w/wou46vbgj.css';
import '../../css/p/p8d-2f0oa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="iidlc_bzb"/><path class="x1tloy_uw"/><path class="c8bbmgmhk"/><path class="wou46vbgj"/><path class="p8d-2f0oa"/></g>`,
		"fallback": "hugeicons:laurel-wreath-right-03",
	});
}

export default Component;
