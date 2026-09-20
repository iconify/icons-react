import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w98n7s1pu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w98n7s1pu"/>`,
		"fallback": "ri:send-plane-fill",
	});
}

export default Component;
