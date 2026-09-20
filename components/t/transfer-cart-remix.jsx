import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irns7vmyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="irns7vmyw"/>`,
		"fallback": "streamline-sharp:transfer-cart-remix",
	});
}

export default Component;
