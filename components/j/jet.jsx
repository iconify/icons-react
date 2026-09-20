import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpx3f3tcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpx3f3tcb"/>`,
		"fallback": "simple-icons:jet",
	});
}

export default Component;
