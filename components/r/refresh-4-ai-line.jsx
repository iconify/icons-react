import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9-e8bcrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9-e8bcrr"/>`,
		"fallback": "mingcute:refresh-4-ai-line",
	});
}

export default Component;
