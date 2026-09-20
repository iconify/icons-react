import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/v/vrx6sqdcz.css';
import '../../css/k/k4_xpnbow.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="vrx6sqdcz"/><path class="k4_xpnbow"/></g>`,
		"fallback": "streamline-plump:location-pin",
	});
}

export default Component;
