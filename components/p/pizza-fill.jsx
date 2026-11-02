import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idhkd6wzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idhkd6wzk"/>`,
		"fallback": "mingcute:pizza-fill",
	});
}

export default Component;
