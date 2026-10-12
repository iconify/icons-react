import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfc93ebce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfc93ebce"/>`,
		"fallback": "lucide-extended:navigation-2-filled",
	});
}

export default Component;
