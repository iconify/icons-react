import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5a7x8bkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5a7x8bkn"/>`,
		"fallback": "lucide:send-horizontal",
	});
}

export default Component;
