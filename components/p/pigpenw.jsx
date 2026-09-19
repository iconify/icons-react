import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai9xlqx-q.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai9xlqx-q"/>`,
		"fallback": "whh:pigpenw",
	});
}

export default Component;
