import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmyt9bbit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmyt9bbit"/>`,
		"fallback": "ri:timer-fill",
	});
}

export default Component;
