import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u67sr_bty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u67sr_bty"/>`,
		"fallback": "mingcute:text-align-start-fill",
	});
}

export default Component;
