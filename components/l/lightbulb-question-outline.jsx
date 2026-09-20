import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np4njztvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np4njztvl"/>`,
		"fallback": "mdi:lightbulb-question-outline",
	});
}

export default Component;
