import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmwr6rb2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmwr6rb2h"/>`,
		"fallback": "streamline-ultimate:shipment-barcode-bold",
	});
}

export default Component;
