import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnlmj4b5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnlmj4b5u"/>`,
		"fallback": "mynaui:shell",
	});
}

export default Component;
