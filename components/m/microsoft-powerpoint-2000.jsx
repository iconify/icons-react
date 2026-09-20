import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb6qy0bak.css';
import '../../css/q/qtm7ddo2d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hb6qy0bak"/><path class="qtm7ddo2d"/>`,
		"fallback": "selfhst:microsoft-powerpoint-2000",
	});
}

export default Component;
