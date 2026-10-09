import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfx3nk7mg.css';
import '../../css/w/wqd1m4bbm.css';
import '../../css/w/w-k7occ-g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfx3nk7mg"/><path class="wqd1m4bbm"/><path class="w-k7occ-g"/>`,
		"fallback": "energy-icons:seabed-habitat-48",
	});
}

export default Component;
