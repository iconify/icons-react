import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2rr4scml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2rr4scml"/>`,
		"fallback": "mynaui:ticket-solid",
	});
}

export default Component;
