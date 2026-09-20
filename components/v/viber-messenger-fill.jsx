import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9--6g2ow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9--6g2ow"/>`,
		"fallback": "mingcute:viber-messenger-fill",
	});
}

export default Component;
