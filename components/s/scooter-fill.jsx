import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj3r7hxgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zj3r7hxgo"/>`,
		"fallback": "mingcute:scooter-fill",
	});
}

export default Component;
