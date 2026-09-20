import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqld04bvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqld04bvy"/>`,
		"fallback": "mingcute:volleyball-fill",
	});
}

export default Component;
