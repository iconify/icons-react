import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lypt8ll5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lypt8ll5u"/>`,
		"fallback": "mingcute:translate-2-fill",
	});
}

export default Component;
