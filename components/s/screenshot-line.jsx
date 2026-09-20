import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae_qjzbwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae_qjzbwf"/>`,
		"fallback": "mingcute:screenshot-line",
	});
}

export default Component;
