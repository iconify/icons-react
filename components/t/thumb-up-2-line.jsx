import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i82l_mncq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i82l_mncq"/>`,
		"fallback": "mingcute:thumb-up-2-line",
	});
}

export default Component;
