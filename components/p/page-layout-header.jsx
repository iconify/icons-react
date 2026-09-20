import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu4q4-rfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu4q4-rfy"/>`,
		"fallback": "mdi:page-layout-header",
	});
}

export default Component;
