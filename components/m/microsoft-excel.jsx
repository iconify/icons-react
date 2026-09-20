import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulx72ubuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulx72ubuy"/>`,
		"fallback": "mdi:microsoft-excel",
	});
}

export default Component;
