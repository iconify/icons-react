import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpce83m5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wpce83m5g"/>`,
		"fallback": "lucide-extended:message-square-warning-filled",
	});
}

export default Component;
