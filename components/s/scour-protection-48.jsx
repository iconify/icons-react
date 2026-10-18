import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifp1qh_-h.css';
import '../../css/w/wfx3nk7mg.css';
import '../../css/m/mzbpuy9cm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifp1qh_-h"/><path class="wfx3nk7mg"/><path class="mzbpuy9cm"/>`,
		"fallback": "energy-icons:scour-protection-48",
	});
}

export default Component;
