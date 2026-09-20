import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz9eh_b1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz9eh_b1l"/>`,
		"fallback": "uil:user-minus",
	});
}

export default Component;
