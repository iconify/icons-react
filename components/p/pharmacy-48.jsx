import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s39lty8yq.css';
import '../../css/p/pxbhfjnuz.css';
import '../../css/w/w9ncmcb-w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s39lty8yq"/><path class="pxbhfjnuz"/><path class="w9ncmcb-w"/>`,
		"fallback": "energy-icons:pharmacy-48",
	});
}

export default Component;
