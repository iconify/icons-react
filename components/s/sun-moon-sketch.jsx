import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kvs9x6woa.css';
import '../../css/u/u9yukr_vq.css';
import '../../css/q/q68_a-bcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kvs9x6woa"/><path class="u9yukr_vq wm-k"/><path class="q68_a-bcp wm-a"/></g>`,
		"fallback": "withicons:sun-moon-sketch",
	});
}

export default Component;
