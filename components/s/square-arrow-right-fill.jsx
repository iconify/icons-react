import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhae8twzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhae8twzk"/>`,
		"fallback": "mingcute:square-arrow-right-fill",
	});
}

export default Component;
