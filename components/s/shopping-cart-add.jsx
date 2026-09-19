import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnvx83ber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnvx83ber"/>`,
		"fallback": "mono-icons:shopping-cart-add",
	});
}

export default Component;
