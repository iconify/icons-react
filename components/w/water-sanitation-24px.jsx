import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws5a_qbia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws5a_qbia"/>`,
		"fallback": "healthicons:water-sanitation-24px",
	});
}

export default Component;
