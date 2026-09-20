import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmuork2pm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mmuork2pm"/>`,
		"fallback": "streamline-ultimate:self-payment-touch-euro-bold",
	});
}

export default Component;
