import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/v/vrx6sqdcz.css';
import '../../css/p/pjyqshb5c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="vrx6sqdcz"/><path class="pjyqshb5c"/></g>`,
		"fallback": "streamline-plump:map-location-star-pin",
	});
}

export default Component;
