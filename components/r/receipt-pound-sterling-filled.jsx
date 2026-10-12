import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f55313bbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f55313bbc"/>`,
		"fallback": "lucide-extended:receipt-pound-sterling-filled",
	});
}

export default Component;
