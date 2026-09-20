import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v7q1lwidl.css';
import '../../css/v/ve0hig3pz.css';
import '../../css/y/y4qe-ubzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v7q1lwidl"/><path class="ve0hig3pz"/><path class="y4qe-ubzy"/></g>`,
		"fallback": "solar:medal-star-linear",
	});
}

export default Component;
