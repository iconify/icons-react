import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtnq_1kzk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wtnq_1kzk"/>`,
		"fallback": "streamline:shopping-cart-subtract-solid",
	});
}

export default Component;
