import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_x2r5e0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h_x2r5e0h"/>`,
		"fallback": "lucide-extended:square-sigma-filled",
	});
}

export default Component;
