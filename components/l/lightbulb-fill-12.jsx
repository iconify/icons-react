import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws-o9bc6q.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws-o9bc6q"/>`,
		"fallback": "garden:lightbulb-fill-12",
	});
}

export default Component;
