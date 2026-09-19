import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7bk8s24b.css';
import '../../css/c/cnc3b_b8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7bk8s24b"/><path clip-rule="evenodd" class="cnc3b_b8n"/>`,
		"fallback": "basil:invoice-outline",
	});
}

export default Component;
