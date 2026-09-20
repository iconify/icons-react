import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl4t4gbss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl4t4gbss"/>`,
		"fallback": "mynaui:type-bold",
	});
}

export default Component;
