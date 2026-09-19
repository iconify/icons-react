import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyad3pbvr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyad3pbvr"/>`,
		"fallback": "fa6-solid:splotch",
	});
}

export default Component;
