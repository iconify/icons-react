import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwat5bb6e.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwat5bb6e"/>`,
		"fallback": "garden:tray-bar-chart-26",
	});
}

export default Component;
