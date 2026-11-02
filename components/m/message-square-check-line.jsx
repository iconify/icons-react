import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw2r6z41g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw2r6z41g"/>`,
		"fallback": "mingcute:message-square-check-line",
	});
}

export default Component;
