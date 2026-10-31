import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wtmdgbf5n.css';
import '../../css/l/lvv6t2uxe.css';
import '../../css/l/lh5cxcb2i.css';
import '../../css/k/kau4d3ldz.css';
import '../../css/q/qcgpe3bqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow wtmdgbf5n"/><path class="lvv6t2uxe"/><path class="lh5cxcb2i"/><path class="kau4d3ldz"/><path class="qcgpe3bqd"/></g>`,
		"fallback": "withicons-retro:picture-in-picture",
	});
}

export default Component;
