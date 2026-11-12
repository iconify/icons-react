import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlsi6_kti.css';
import '../../css/n/njlpr9bmf.css';
import '../../css/q/qbc0ipycg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlsi6_kti"/><path class="njlpr9bmf"/><path class="qbc0ipycg"/>`,
		"fallback": "selfhst:ksuite-grids-light",
	});
}

export default Component;
