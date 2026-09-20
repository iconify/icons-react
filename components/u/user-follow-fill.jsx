import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d87_fsf7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d87_fsf7l"/>`,
		"fallback": "mingcute:user-follow-fill",
	});
}

export default Component;
