import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgr7q-t0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgr7q-t0s"/>`,
		"fallback": "mdi:timeline-question",
	});
}

export default Component;
