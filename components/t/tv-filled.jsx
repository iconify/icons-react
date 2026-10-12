import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvrjmnw7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvrjmnw7r"/>`,
		"fallback": "lucide-extended:tv-filled",
	});
}

export default Component;
