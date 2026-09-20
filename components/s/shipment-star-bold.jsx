import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywkgkr1pi.css';
import '../../css/s/slgmhktay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywkgkr1pi"/><path class="slgmhktay"/>`,
		"fallback": "streamline-ultimate:shipment-star-bold",
	});
}

export default Component;
