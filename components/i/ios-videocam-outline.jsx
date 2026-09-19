import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjuulwb_p.css';
import '../../css/i/i60oecb_z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjuulwb_p"/><path class="i60oecb_z"/>`,
		"fallback": "ion:ios-videocam-outline",
	});
}

export default Component;
