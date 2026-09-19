import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv7h-h8kz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv7h-h8kz"/>`,
		"fallback": "healthicons:question-outline-24px",
	});
}

export default Component;
