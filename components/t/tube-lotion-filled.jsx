import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0dbrw-yo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y0dbrw-yo"/>`,
		"fallback": "lucide-extended:tube-lotion-filled",
	});
}

export default Component;
