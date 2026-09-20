import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa9qnz0zt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa9qnz0zt"/>`,
		"fallback": "mi:next",
	});
}

export default Component;
