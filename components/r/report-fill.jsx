import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co1p06nje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="co1p06nje"/>`,
		"fallback": "mingcute:report-fill",
	});
}

export default Component;
