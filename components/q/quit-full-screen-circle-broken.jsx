import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bc1hpiy2y.css';
import '../../css/k/krbrm1v9d.css';
import '../../css/e/e82515hbz.css';
import '../../css/u/u66s-fbqm.css';
import '../../css/k/ko6o-6b9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bc1hpiy2y"/><path class="krbrm1v9d"/><path class="e82515hbz"/><path class="u66s-fbqm"/><path class="ko6o-6b9b"/></g>`,
		"fallback": "solar:quit-full-screen-circle-broken",
	});
}

export default Component;
