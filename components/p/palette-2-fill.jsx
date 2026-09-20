import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbrnx5bxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbrnx5bxb"/>`,
		"fallback": "mingcute:palette-2-fill",
	});
}

export default Component;
