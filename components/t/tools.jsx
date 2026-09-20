import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap_-e3b3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap_-e3b3e"/>`,
		"fallback": "tdesign:tools",
	});
}

export default Component;
