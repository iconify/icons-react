import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmj9r3-wc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmj9r3-wc"/>`,
		"fallback": "ri:notification-3-fill",
	});
}

export default Component;
