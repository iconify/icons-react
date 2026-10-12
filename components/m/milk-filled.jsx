import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tiw-50w9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tiw-50w9o"/>`,
		"fallback": "lucide-extended:milk-filled",
	});
}

export default Component;
