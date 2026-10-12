import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7y1dxrhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e7y1dxrhf"/>`,
		"fallback": "lucide-extended:ticket-plus-filled",
	});
}

export default Component;
