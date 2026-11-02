import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enq9v8bkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enq9v8bkv"/>`,
		"fallback": "mingcute:mail-question-mark-line",
	});
}

export default Component;
