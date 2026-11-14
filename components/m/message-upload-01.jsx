import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/javag0hlp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="javag0hlp"/>`,
		"fallback": "hugeicons:message-upload-01",
	});
}

export default Component;
