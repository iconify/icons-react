import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqlp_3l8j.css';
import '../../css/x/xajndacdt.css';
import '../../css/t/tco_xthkd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqlp_3l8j"/><path class="xajndacdt"/><path class="tco_xthkd"/>`,
		"fallback": "energy-icons:log-out-48",
	});
}

export default Component;
