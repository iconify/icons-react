import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlzy0nb1j.css';
import '../../css/n/n32zg0b1z.css';
import '../../css/u/ugcydkb1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlzy0nb1j"/><circle class="n32zg0b1z"/><path class="ugcydkb1d"/>`,
		"fallback": "typcn:warning-outline",
	});
}

export default Component;
