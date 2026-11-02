import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7hrz9bfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7hrz9bfp"/>`,
		"fallback": "mingcute:invite-line",
	});
}

export default Component;
