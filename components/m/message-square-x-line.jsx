import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivx988ckq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivx988ckq"/>`,
		"fallback": "mingcute:message-square-x-line",
	});
}

export default Component;
