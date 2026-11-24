import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2hrev5_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2hrev5_h"/>`,
		"fallback": "lucide-extended:shopping-cart-filled",
	});
}

export default Component;
