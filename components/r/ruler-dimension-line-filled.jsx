import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arac5xnmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arac5xnmo"/>`,
		"fallback": "lucide-extended:ruler-dimension-line-filled",
	});
}

export default Component;
