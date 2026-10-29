import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2uq3i48e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2uq3i48e"/>`,
		"fallback": "withicons:square-x-solid",
	});
}

export default Component;
