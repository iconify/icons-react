import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/ftogirb6c.css';
import '../../css/b/by49p9gor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ftogirb6c"/><path class="by49p9gor"/></g>`,
		"fallback": "solar:pie-chart-broken",
	});
}

export default Component;
