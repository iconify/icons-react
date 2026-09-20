import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la79i3b_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la79i3b_k"/>`,
		"fallback": "ri:test-tube-line",
	});
}

export default Component;
