import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inc6vt4-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inc6vt4-w"/>`,
		"fallback": "pixelarticons:subscriptions-sharp",
	});
}

export default Component;
