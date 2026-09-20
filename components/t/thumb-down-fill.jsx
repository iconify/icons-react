import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9a5ey1ri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9a5ey1ri"/>`,
		"fallback": "mingcute:thumb-down-fill",
	});
}

export default Component;
