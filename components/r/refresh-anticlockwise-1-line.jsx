import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aerx4bbek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aerx4bbek"/>`,
		"fallback": "mingcute:refresh-anticlockwise-1-line",
	});
}

export default Component;
