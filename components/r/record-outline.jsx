import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb5y06but.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pb5y06but"/>`,
		"fallback": "solar:record-outline",
	});
}

export default Component;
