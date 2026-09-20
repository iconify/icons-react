import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh6dzbc7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gh6dzbc7t"/>`,
		"fallback": "lets-icons:transfer-long-down",
	});
}

export default Component;
