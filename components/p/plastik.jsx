import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/seg1y75pw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="seg1y75pw"/>`,
		"fallback": "token:plastik",
	});
}

export default Component;
