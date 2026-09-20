import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv0iecbbq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv0iecbbq"/>`,
		"fallback": "selfhst:rudder-light",
	});
}

export default Component;
