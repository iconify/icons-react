import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3rvfy7cl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m3rvfy7cl"/>`,
		"fallback": "lucide-extended:message-circle-more-filled",
	});
}

export default Component;
