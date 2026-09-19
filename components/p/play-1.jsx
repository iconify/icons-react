import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp0kc7r6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qp0kc7r6g"/>`,
		"fallback": "circum:play-1",
	});
}

export default Component;
