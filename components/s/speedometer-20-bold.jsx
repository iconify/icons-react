import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oorqf-8pe.css';
import '../../css/y/yvm9oub2m.css';
import '../../css/h/hvy9vrb1o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oorqf-8pe"/><path class="yvm9oub2m"/><path class="hvy9vrb1o"/>`,
		"fallback": "energy-icons:speedometer-20-bold",
	});
}

export default Component;
