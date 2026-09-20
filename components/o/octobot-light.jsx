import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqo5wlb-n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqo5wlb-n"/>`,
		"fallback": "selfhst:octobot-light",
	});
}

export default Component;
