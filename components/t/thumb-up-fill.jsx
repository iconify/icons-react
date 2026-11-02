import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo70_cbhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo70_cbhg"/>`,
		"fallback": "mingcute:thumb-up-fill",
	});
}

export default Component;
