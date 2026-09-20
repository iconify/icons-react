import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/r/rwq5i5cbv.css';
import '../../css/f/frbe81j1n.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="rwq5i5cbv"/><path class="frbe81j1n"/></g>`,
		"fallback": "marketeq:turn-around-down-direction",
	});
}

export default Component;
