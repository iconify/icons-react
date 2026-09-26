import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/keqt0zbld.css';
import '../../css/w/wip28lbxr.css';
import '../../css/e/e51bh2g-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="keqt0zbld"/><path class="wip28lbxr"/><path class="e51bh2g-o"/></g>`,
		"fallback": "solar:rows-3-broken",
	});
}

export default Component;
