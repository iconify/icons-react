import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g626xxb-k.css';
import '../../css/y/y3jhmd2ah.css';
import '../../css/e/e6bz15b5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g626xxb-k"/><path class="y3jhmd2ah"/><path class="e6bz15b5n"/></g>`,
		"fallback": "solar:panel-top-close-broken",
	});
}

export default Component;
