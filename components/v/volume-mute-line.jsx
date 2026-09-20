import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai5qp9qio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai5qp9qio"/>`,
		"fallback": "mingcute:volume-mute-line",
	});
}

export default Component;
