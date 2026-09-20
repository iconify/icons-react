import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou2dp-ouw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou2dp-ouw"/>`,
		"fallback": "mdi:overboard",
	});
}

export default Component;
