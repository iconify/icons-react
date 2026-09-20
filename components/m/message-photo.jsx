import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8c-64bom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8c-64bom"/>`,
		"fallback": "mdi-light:message-photo",
	});
}

export default Component;
