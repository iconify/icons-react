import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfqch5byy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfqch5byy"/>`,
		"fallback": "pixelarticons:message-text",
	});
}

export default Component;
