import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcmznibzp.css';
import '../../css/o/of6h3jbln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcmznibzp"/><path class="of6h3jbln"/>`,
		"fallback": "streamline-ultimate:shipment-cargo-boat-bold",
	});
}

export default Component;
