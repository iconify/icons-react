import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3k2p-2sv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3k2p-2sv"/>`,
		"fallback": "mingcute:time-fill",
	});
}

export default Component;
