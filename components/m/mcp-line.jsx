import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyq324bpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyq324bpo"/>`,
		"fallback": "mingcute:mcp-line",
	});
}

export default Component;
