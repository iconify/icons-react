import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0knsgbev.css';
import '../../css/e/e9axqfb4f.css';
import '../../css/p/pdhn0vbsi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0knsgbev"/><path class="e9axqfb4f"/><path class="pdhn0vbsi"/>`,
		"fallback": "selfhst:tv2-play",
	});
}

export default Component;
