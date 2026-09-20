import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1mxp-b2u.css';
import '../../css/j/jw8pkbh0s.css';
import '../../css/w/wn29amz4h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1mxp-b2u"/><path class="jw8pkbh0s"/><path class="wn29amz4h"/>`,
		"fallback": "selfhst:openvas-dark",
	});
}

export default Component;
