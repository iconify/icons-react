import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lebm5qx9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lebm5qx9h"/>`,
		"fallback": "lucide-extended:tablet-filled",
	});
}

export default Component;
