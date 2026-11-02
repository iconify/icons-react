import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdtwxiq-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdtwxiq-w"/>`,
		"fallback": "mingcute:rotate-to-horizontal-fill",
	});
}

export default Component;
