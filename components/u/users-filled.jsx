import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg3_5yc3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg3_5yc3z"/>`,
		"fallback": "lucide-extended:users-filled",
	});
}

export default Component;
