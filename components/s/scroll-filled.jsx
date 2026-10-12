import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luch8eh8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="luch8eh8u"/>`,
		"fallback": "lucide-extended:scroll-filled",
	});
}

export default Component;
