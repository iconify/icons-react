import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xeah8-6tb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xeah8-6tb"/>`,
		"fallback": "bxs:log-out-circle",
	});
}

export default Component;
