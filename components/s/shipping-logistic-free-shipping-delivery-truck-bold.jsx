import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q--72vv7c.css';
import '../../css/c/cz0r6uwoz.css';
import '../../css/n/nf5-akdhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q--72vv7c"/><path class="cz0r6uwoz"/><path class="nf5-akdhf"/>`,
		"fallback": "streamline-ultimate:shipping-logistic-free-shipping-delivery-truck-bold",
	});
}

export default Component;
