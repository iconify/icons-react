import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw1jalb_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw1jalb_i"/>`,
		"fallback": "lucide-extended:moon-star-filled",
	});
}

export default Component;
