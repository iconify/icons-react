import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v7q1lwidl.css';
import '../../css/r/r2yb3pnfd.css';
import '../../css/r/ryhgqrraa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v7q1lwidl"/><path class="r2yb3pnfd"/><path class="ryhgqrraa"/></g>`,
		"fallback": "solar:medal-star-linear",
	});
}

export default Component;
