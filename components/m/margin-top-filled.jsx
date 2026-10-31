import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-o92wb2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-o92wb2y"/>`,
		"fallback": "lucide-extended:margin-top-filled",
	});
}

export default Component;
