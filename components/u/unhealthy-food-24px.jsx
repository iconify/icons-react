import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwnuy0bru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fwnuy0bru"/>`,
		"fallback": "healthicons:unhealthy-food-24px",
	});
}

export default Component;
