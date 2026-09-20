import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs02mwb7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs02mwb7g"/>`,
		"fallback": "mingcute:layout-bottom-close-line",
	});
}

export default Component;
