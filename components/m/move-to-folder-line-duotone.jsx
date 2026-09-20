import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/im-r5ac5p.css';
import '../../css/c/cmiy1gbrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="im-r5ac5p"/><path class="cmiy1gbrh"/></g>`,
		"fallback": "solar:move-to-folder-line-duotone",
	});
}

export default Component;
