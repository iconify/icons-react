import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lk387obkc.css';
import '../../css/z/zeh2m0rdk.css';
import '../../css/q/q-3psc-ot.css';
import '../../css/c/c0rqgbbqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="lk387obkc"/><path class="zeh2m0rdk"/><path class="q-3psc-ot"/><path class="c0rqgbbqr"/></g>`,
		"fallback": "solar:running-round-broken",
	});
}

export default Component;
