import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twl58-cvc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="twl58-cvc"/>`,
		"fallback": "streamline-color:signal-none-flat",
	});
}

export default Component;
