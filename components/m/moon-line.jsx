import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewg0d492u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewg0d492u"/>`,
		"fallback": "mingcute:moon-line",
	});
}

export default Component;
