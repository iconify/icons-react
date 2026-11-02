import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xaaq_ob0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xaaq_ob0h"/>`,
		"fallback": "mingcute:safe-shield-line",
	});
}

export default Component;
