import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4r8w8b0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4r8w8b0v"/>`,
		"fallback": "ri:percent-fill",
	});
}

export default Component;
