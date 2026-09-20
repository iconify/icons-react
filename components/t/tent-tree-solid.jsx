import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1y5m5elh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1y5m5elh"/>`,
		"fallback": "mynaui:tent-tree-solid",
	});
}

export default Component;
