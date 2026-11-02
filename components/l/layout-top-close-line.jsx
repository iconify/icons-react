import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwomdxb8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwomdxb8n"/>`,
		"fallback": "mingcute:layout-top-close-line",
	});
}

export default Component;
