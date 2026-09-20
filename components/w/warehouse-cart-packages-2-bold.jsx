import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbma2iban.css';
import '../../css/f/fv36o8gan.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbma2iban"/><path class="fv36o8gan"/>`,
		"fallback": "streamline-ultimate:warehouse-cart-packages-2-bold",
	});
}

export default Component;
