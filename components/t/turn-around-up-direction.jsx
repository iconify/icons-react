import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/n/ns8mi-slv.css';
import '../../css/z/zhbyac4eb.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="ns8mi-slv"/><path class="zhbyac4eb"/></g>`,
		"fallback": "marketeq:turn-around-up-direction",
	});
}

export default Component;
