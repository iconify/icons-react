import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_zt0198q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_zt0198q"/>`,
		"fallback": "mingcute:list-plus-fill",
	});
}

export default Component;
