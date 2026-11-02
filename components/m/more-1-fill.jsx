import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dc4vskb5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dc4vskb5i"/>`,
		"fallback": "mingcute:more-1-fill",
	});
}

export default Component;
