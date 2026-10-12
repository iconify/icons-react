import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0vebbm1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0vebbm1i"/>`,
		"fallback": "lucide-extended:user-minus-filled",
	});
}

export default Component;
