import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q548c2bkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q548c2bkq"/>`,
		"fallback": "mingcute:rectangle-vertical-fill",
	});
}

export default Component;
