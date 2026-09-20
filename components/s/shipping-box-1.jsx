import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/p/pseld3bah.css';
import '../../css/u/ucpbo0tir.css';
import '../../css/l/ldkkwxbud.css';
import '../../css/m/mj6_2kb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="pseld3bah"/><path class="ucpbo0tir"/><path class="ldkkwxbud"/><path class="mj6_2kb1q"/></g>`,
		"fallback": "streamline-sharp-color:shipping-box-1",
	});
}

export default Component;
