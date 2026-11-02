import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqeb2wqgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqeb2wqgv"/>`,
		"fallback": "mingcute:light-snow-fill",
	});
}

export default Component;
