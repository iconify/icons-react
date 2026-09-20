import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kiglhf1ae.css';
import '../../css/n/nzmqz3bvt.css';
import '../../css/l/l1jur_bpp.css';
import '../../css/o/onqn7xbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kiglhf1ae"/><path class="nzmqz3bvt"/><path class="l1jur_bpp"/><path class="onqn7xbvv"/></g>`,
		"fallback": "solar:smart-speaker-linear",
	});
}

export default Component;
