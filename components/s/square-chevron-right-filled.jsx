import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9y5vx-ao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h9y5vx-ao"/>`,
		"fallback": "lucide-extended:square-chevron-right-filled",
	});
}

export default Component;
