import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oem3dgbor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oem3dgbor"/>`,
		"fallback": "mynaui:seven-solid",
	});
}

export default Component;
