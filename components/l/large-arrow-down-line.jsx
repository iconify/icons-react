import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5xpi3wfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5xpi3wfr"/>`,
		"fallback": "mingcute:large-arrow-down-line",
	});
}

export default Component;
