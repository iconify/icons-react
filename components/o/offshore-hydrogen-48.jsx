import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no6y62xbm.css';
import '../../css/x/xm0_l8bjf.css';
import '../../css/l/ldpfqnboz.css';
import '../../css/c/c65-ehvfy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no6y62xbm"/><path class="xm0_l8bjf"/><path class="ldpfqnboz"/><path class="c65-ehvfy"/>`,
		"fallback": "energy-icons:offshore-hydrogen-48",
	});
}

export default Component;
