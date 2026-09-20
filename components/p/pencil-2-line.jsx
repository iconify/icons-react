import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx5-28b1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx5-28b1r"/>`,
		"fallback": "mingcute:pencil-2-line",
	});
}

export default Component;
