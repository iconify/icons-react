import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xvkwtxc3k.css';
import '../../css/u/ukmsnib_m.css';
import '../../css/j/jakv27kgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="xvkwtxc3k"/><path class="ukmsnib_m"/><path class="jakv27kgd"/></g>`,
		"fallback": "solar:stretching-round-line-duotone",
	});
}

export default Component;
