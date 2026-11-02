import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcbv_q0xa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcbv_q0xa"/>`,
		"fallback": "mingcute:terminal-line",
	});
}

export default Component;
