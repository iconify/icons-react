import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7mhy5b_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7mhy5b_l"/>`,
		"fallback": "mynaui:tally-five-solid",
	});
}

export default Component;
