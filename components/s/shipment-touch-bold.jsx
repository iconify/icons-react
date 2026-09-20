import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p82w3lb4c.css';
import '../../css/q/qjxo69b2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p82w3lb4c"/><path class="qjxo69b2r"/>`,
		"fallback": "streamline-ultimate:shipment-touch-bold",
	});
}

export default Component;
