import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smxlor65h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smxlor65h"/>`,
		"fallback": "mingcute:vip-3-line",
	});
}

export default Component;
