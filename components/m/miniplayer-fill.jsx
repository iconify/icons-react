import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsgw1ybqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsgw1ybqv"/>`,
		"fallback": "mingcute:miniplayer-fill",
	});
}

export default Component;
