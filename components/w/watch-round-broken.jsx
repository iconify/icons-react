import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/an--fmawt.css';
import '../../css/p/p2-28vwqt.css';
import '../../css/k/kdx2-qp7s.css';
import '../../css/p/pjpaztbao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="an--fmawt"/><path class="p2-28vwqt"/><path class="kdx2-qp7s"/><path class="pjpaztbao"/></g>`,
		"fallback": "solar:watch-round-broken",
	});
}

export default Component;
