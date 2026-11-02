import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la-9fub_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la-9fub_f"/>`,
		"fallback": "mingcute:key-2-fill",
	});
}

export default Component;
