import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j62at_pho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j62at_pho"/>`,
		"fallback": "mdi:lightbulb-auto",
	});
}

export default Component;
