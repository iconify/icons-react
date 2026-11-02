import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km1oxzbcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km1oxzbcp"/>`,
		"fallback": "mingcute:signature-2-ai-fill",
	});
}

export default Component;
