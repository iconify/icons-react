import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euaat7s8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euaat7s8e"/>`,
		"fallback": "lucide:phone-call",
	});
}

export default Component;
