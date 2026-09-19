import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1t1o_btq.css';
import '../../css/r/r-v6gebze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1t1o_btq"/><path class="r-v6gebze"/>`,
		"fallback": "boxicons:location-pin",
	});
}

export default Component;
