import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krrf1_05m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krrf1_05m"/>`,
		"fallback": "mdi:temperature-bluetooth",
	});
}

export default Component;
