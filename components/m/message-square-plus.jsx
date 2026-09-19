import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-29rqb7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-29rqb7f"/>`,
		"fallback": "hugeicons:message-square-plus",
	});
}

export default Component;
