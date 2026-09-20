import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8l77y5we.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8l77y5we"/>`,
		"fallback": "tabler:square-rounded-chevron-right-filled",
	});
}

export default Component;
