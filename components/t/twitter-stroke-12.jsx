import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfk4xd31m.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfk4xd31m"/>`,
		"fallback": "garden:twitter-stroke-12",
	});
}

export default Component;
