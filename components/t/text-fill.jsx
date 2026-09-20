import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkagiub5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkagiub5c"/>`,
		"fallback": "mingcute:text-fill",
	});
}

export default Component;
