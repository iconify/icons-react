import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1p_b8b0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w1p_b8b0e"/>`,
		"fallback": "lucide-extended:square-letter-s-filled",
	});
}

export default Component;
