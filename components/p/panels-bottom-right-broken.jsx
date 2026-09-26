import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dplnzz0rj.css';
import '../../css/u/uru1j_b_t.css';
import '../../css/k/k-xqiwbqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dplnzz0rj"/><path class="uru1j_b_t"/><path class="k-xqiwbqo"/></g>`,
		"fallback": "solar:panels-bottom-right-broken",
	});
}

export default Component;
