import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugsdpyq2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugsdpyq2g"/>`,
		"fallback": "mingcute:message-circle-x-line",
	});
}

export default Component;
