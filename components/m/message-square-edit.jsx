import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkag413ll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkag413ll"/>`,
		"fallback": "noviair-light:message-square-edit",
	});
}

export default Component;
