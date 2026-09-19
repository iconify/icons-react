import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-33augld.css';
import '../../css/b/bxfwu8b_p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-33augld"/><path class="bxfwu8b_p"/>`,
		"fallback": "ion:ios-planet",
	});
}

export default Component;
