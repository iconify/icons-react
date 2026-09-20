import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eu5pm3tfm.css';
import '../../css/c/cj2ti8zkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="eu5pm3tfm"/><path class="cj2ti8zkk"/></g>`,
		"fallback": "solar:shield-up-linear",
	});
}

export default Component;
