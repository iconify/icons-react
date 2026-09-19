import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/ze_-zp_7l.css';
import '../../css/c/csum4n-2b.css';
import '../../css/f/fvpfrkbjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ze_-zp_7l"/><path class="csum4n-2b"/><path class="fvpfrkbjr"/></g>`,
		"fallback": "hugeicons:screen-share-off",
	});
}

export default Component;
