import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-44i5b8n.css';

const viewBox = {"width":24,"height":24,"left":-7,"top":-5.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-44i5b8n"/>`,
		"fallback": "jam:strikethrough",
	});
}

export default Component;
