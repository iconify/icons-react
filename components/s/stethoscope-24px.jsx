import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcjx7jhaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcjx7jhaj"/>`,
		"fallback": "healthicons:stethoscope-24px",
	});
}

export default Component;
