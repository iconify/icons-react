import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns49d_t4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ns49d_t4f"/>`,
		"fallback": "mynaui:lira-square-solid",
	});
}

export default Component;
