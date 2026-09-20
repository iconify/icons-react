import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz51hibla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wz51hibla"/>`,
		"fallback": "streamline-sharp:shipment-check-remix",
	});
}

export default Component;
