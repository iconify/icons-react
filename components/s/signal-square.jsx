import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx2725qvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx2725qvz"/>`,
		"fallback": "mynaui:signal-square",
	});
}

export default Component;
