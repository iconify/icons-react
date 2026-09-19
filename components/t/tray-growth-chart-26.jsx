import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dztpopbze.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dztpopbze"/>`,
		"fallback": "garden:tray-growth-chart-26",
	});
}

export default Component;
