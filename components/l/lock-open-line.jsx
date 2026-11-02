import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl6wa7bkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl6wa7bkj"/>`,
		"fallback": "mingcute:lock-open-line",
	});
}

export default Component;
