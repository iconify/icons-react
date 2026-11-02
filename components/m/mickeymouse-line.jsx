import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlt238bah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlt238bah"/>`,
		"fallback": "mingcute:mickeymouse-line",
	});
}

export default Component;
