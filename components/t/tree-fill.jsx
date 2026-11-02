import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgb4a4bbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgb4a4bbf"/>`,
		"fallback": "mingcute:tree-fill",
	});
}

export default Component;
