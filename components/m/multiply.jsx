import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xab6nwpco.css';
import '../../css/t/tev46ccry.css';
import '../../css/y/yarnly1vz.css';
import '../../css/n/nhq5xnbgi.css';
import '../../css/t/tcdaixh8a.css';
import '../../css/p/pchw5obkd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGuOzHOdbn" cx="80.7" cy="72.4" r="110.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="xab6nwpco"/><stop offset=".85" class="tev46ccry"/><stop offset="1" class="tev46ccry"/></radialGradient></defs><path class="yarnly1vz"/><path fill="url(#SVGuOzHOdbn)" transform="matrix(3.2 0 0 3.2 -58.81 -58.81)" class="nhq5xnbgi"/><path class="tcdaixh8a"/><path class="pchw5obkd"/>`,
		"fallback": "xero-emoji:multiply",
	});
}

export default Component;
