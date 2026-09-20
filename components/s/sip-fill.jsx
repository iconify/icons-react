import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs-u-bc-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs-u-bc-i"/>`,
		"fallback": "ri:sip-fill",
	});
}

export default Component;
