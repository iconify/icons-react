import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qusu2jbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qusu2jbdk"/>`,
		"fallback": "mingcute:tank-line",
	});
}

export default Component;
