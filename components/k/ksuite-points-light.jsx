import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlsi6_kti.css';
import '../../css/n/njlpr9bmf.css';
import '../../css/e/e-s8zybio.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlsi6_kti"/><path class="njlpr9bmf"/><path class="e-s8zybio"/>`,
		"fallback": "selfhst:ksuite-points-light",
	});
}

export default Component;
