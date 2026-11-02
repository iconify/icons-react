import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv46si9ls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv46si9ls"/>`,
		"fallback": "mingcute:viber-messenger-fill",
	});
}

export default Component;
