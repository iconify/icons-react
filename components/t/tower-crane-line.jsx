import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi4ud7b8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi4ud7b8c"/>`,
		"fallback": "mingcute:tower-crane-line",
	});
}

export default Component;
