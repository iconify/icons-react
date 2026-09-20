import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka7_x7bmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka7_x7bmi"/>`,
		"fallback": "ri:projector-line",
	});
}

export default Component;
