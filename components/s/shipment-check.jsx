import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hubh5y9go.css';
import '../../css/c/c2fxpvbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hubh5y9go"/><path class="c2fxpvbht"/></g>`,
		"fallback": "streamline-sharp:shipment-check",
	});
}

export default Component;
