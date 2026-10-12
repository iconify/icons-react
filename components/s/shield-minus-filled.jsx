import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9_i5epxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w9_i5epxl"/>`,
		"fallback": "lucide-extended:shield-minus-filled",
	});
}

export default Component;
