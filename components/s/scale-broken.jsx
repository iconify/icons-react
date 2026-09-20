import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zh_u0iaqv.css';
import '../../css/h/hwifnpb2v.css';
import '../../css/k/k1tkx2bcg.css';
import '../../css/q/quzsnqbup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zh_u0iaqv"/><path class="hwifnpb2v"/><path class="k1tkx2bcg"/><path class="quzsnqbup"/></g>`,
		"fallback": "solar:scale-broken",
	});
}

export default Component;
