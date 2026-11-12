import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4m5qijdq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4m5qijdq"/>`,
		"fallback": "selfhst:rustdesk-light",
	});
}

export default Component;
