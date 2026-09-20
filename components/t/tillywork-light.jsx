import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq5bo2w_e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mq5bo2w_e"/>`,
		"fallback": "selfhst:tillywork-light",
	});
}

export default Component;
