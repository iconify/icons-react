import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dammqr2-z.css';
import '../../css/y/yfr4u4d-v.css';
import '../../css/p/p8iis0b6r.css';
import '../../css/n/nsl_tfb_b.css';
import '../../css/w/wocyyxi5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dammqr2-z"/><path class="wm-k yfr4u4d-v"/><path class="p8iis0b6r wm-a"/><path class="nsl_tfb_b wm-k"/><path class="wm-a wocyyxi5x"/></g>`,
		"fallback": "withicons:text-search-sketch",
	});
}

export default Component;
