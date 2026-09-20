import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzube6q4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzube6q4c"/>`,
		"fallback": "mingcute:upload-3-fill",
	});
}

export default Component;
