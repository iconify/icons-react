import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpfv3y81q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpfv3y81q"/>`,
		"fallback": "circum:view-column",
	});
}

export default Component;
