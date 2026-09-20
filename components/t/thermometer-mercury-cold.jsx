import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3h1a6bcc.css';
import '../../css/y/yuyfg5bdi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVGuIBCwefD" viewBox="0 0 72 168"><circle class="e3h1a6bcc"/><path class="yuyfg5bdi"/></symbol></defs><use width="72" height="168" href="#SVGuIBCwefD" transform="translate(220 204)"/>`,
		"fallback": "meteocons:thermometer-mercury-cold",
	});
}

export default Component;
