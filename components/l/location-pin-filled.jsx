import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgbmqc20c.css';
import '../../css/r/r-v6gebze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgbmqc20c"/><path class="r-v6gebze"/>`,
		"fallback": "boxicons:location-pin-filled",
	});
}

export default Component;
