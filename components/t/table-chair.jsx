import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu7afbcqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu7afbcqm"/>`,
		"fallback": "mdi:table-chair",
	});
}

export default Component;
