import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp1_bxbav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gp1_bxbav"/>`,
		"fallback": "ri:question-line",
	});
}

export default Component;
