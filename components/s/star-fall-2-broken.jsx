import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o18hhccub.css';
import '../../css/b/bntungx3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o18hhccub"/><path class="bntungx3q"/></g>`,
		"fallback": "solar:star-fall-2-broken",
	});
}

export default Component;
