import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy7l1ybzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fy7l1ybzj"/>`,
		"fallback": "lucide-extended:test-tubes-filled",
	});
}

export default Component;
