import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2pvmcr4g.css';
import '../../css/w/wl6oy3b4s.css';
import '../../css/d/dsq5v98-c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2pvmcr4g"/><path class="wl6oy3b4s"/><path class="dsq5v98-c"/>`,
		"fallback": "energy-icons:post-office-48",
	});
}

export default Component;
