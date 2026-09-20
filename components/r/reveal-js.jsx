import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddkf61byi.css';
import '../../css/s/s45cdxblk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddkf61byi"/><path class="s45cdxblk"/>`,
		"fallback": "selfhst:reveal-js",
	});
}

export default Component;
