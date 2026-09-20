import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6i42hbhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6i42hbhh"/>`,
		"fallback": "ri:layout-4-line",
	});
}

export default Component;
