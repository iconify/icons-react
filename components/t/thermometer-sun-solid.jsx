import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5_f4-b7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5_f4-b7p"/>`,
		"fallback": "mynaui:thermometer-sun-solid",
	});
}

export default Component;
