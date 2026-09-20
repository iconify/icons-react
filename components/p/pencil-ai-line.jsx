import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7vhkbbbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7vhkbbbu"/>`,
		"fallback": "mingcute:pencil-ai-line",
	});
}

export default Component;
