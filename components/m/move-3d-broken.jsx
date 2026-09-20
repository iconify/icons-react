import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qim-6bkwl.css';
import '../../css/h/h4koblh4d.css';
import '../../css/n/n_9rn8bax.css';
import '../../css/e/e_tzm2juu.css';
import '../../css/x/x3o6axbse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qim-6bkwl"/><path class="h4koblh4d"/><path class="n_9rn8bax"/><path class="e_tzm2juu"/><path class="x3o6axbse"/></g>`,
		"fallback": "solar:move-3d-broken",
	});
}

export default Component;
