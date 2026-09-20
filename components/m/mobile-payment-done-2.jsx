import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/y/yf_h25yie.css';
import '../../css/p/plw4ly3ms.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="yf_h25yie"/><path class="plw4ly3ms"/></g>`,
		"fallback": "marketeq:mobile-payment-done-2",
	});
}

export default Component;
