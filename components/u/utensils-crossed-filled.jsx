import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amxt-xpqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amxt-xpqj"/>`,
		"fallback": "lucide-extended:utensils-crossed-filled",
	});
}

export default Component;
