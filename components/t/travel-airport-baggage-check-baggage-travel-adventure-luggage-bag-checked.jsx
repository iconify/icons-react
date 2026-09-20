import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/up_u7759p.css';
import '../../css/l/lql4_8klm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="up_u7759p"/><path class="lql4_8klm"/></g>`,
		"fallback": "streamline:travel-airport-baggage-check-baggage-travel-adventure-luggage-bag-checked",
	});
}

export default Component;
