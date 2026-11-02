import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz0n7hbdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz0n7hbdl"/>`,
		"fallback": "mingcute:large-arrow-right-fill",
	});
}

export default Component;
