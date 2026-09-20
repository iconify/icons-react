import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrrjxl14w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrrjxl14w"/>`,
		"fallback": "mdi:vhs",
	});
}

export default Component;
