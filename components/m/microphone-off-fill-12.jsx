import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsypz07zq.css';
import '../../css/s/sxehn3akv.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsypz07zq"/><path class="sxehn3akv"/>`,
		"fallback": "garden:microphone-off-fill-12",
	});
}

export default Component;
