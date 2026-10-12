import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjvc8yb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pjvc8yb1i"/>`,
		"fallback": "lucide-extended:trailer-filled",
	});
}

export default Component;
