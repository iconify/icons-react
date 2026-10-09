import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmgp-hp4m.css';
import '../../css/p/pp2z-qb2n.css';
import '../../css/d/dp7t9qbvm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmgp-hp4m"/><path class="pp2z-qb2n"/><path class="dp7t9qbvm"/>`,
		"fallback": "energy-icons:retrofit-20-bold",
	});
}

export default Component;
