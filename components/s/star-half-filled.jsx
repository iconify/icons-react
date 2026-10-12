import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lljs6_q0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lljs6_q0j"/>`,
		"fallback": "lucide-extended:star-half-filled",
	});
}

export default Component;
