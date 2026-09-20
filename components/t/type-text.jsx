import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgtybey6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgtybey6z"/>`,
		"fallback": "mynaui:type-text",
	});
}

export default Component;
