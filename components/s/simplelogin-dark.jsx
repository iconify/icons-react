import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqzu09b6l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqzu09b6l"/>`,
		"fallback": "selfhst:simplelogin-dark",
	});
}

export default Component;
