import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpu8nbc8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpu8nbc8h"/>`,
		"fallback": "mynaui:letter-d",
	});
}

export default Component;
