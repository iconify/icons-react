import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4y1onb8u.css';
import '../../css/y/ybqrj5brm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o4y1onb8u"/><path class="ybqrj5brm"/>`,
		"fallback": "lucide-extended:package-check-filled",
	});
}

export default Component;
