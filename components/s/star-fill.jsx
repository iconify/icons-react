import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iql4axbme.css';
import '../../css/n/nd6bc6b-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGwDJxaeOQ)"><path class="iql4axbme"/></g><defs><clipPath id="SVGwDJxaeOQ"><path class="nd6bc6b-x"/></clipPath></defs></g>`,
		"fallback": "mage:star-fill",
	});
}

export default Component;
