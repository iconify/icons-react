import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm8a7_bwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nm8a7_bwz"/>`,
		"fallback": "streamline-ultimate:shipment-crack-bold",
	});
}

export default Component;
