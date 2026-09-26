import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y3q129yby.css';
import '../../css/m/ml0cb1b5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y3q129yby"/><path class="ml0cb1b5h"/></g>`,
		"fallback": "solar:panel-right-broken",
	});
}

export default Component;
