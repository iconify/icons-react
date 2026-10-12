import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-r3gkb9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-r3gkb9o"/>`,
		"fallback": "lucide-extended:volume-1-filled",
	});
}

export default Component;
