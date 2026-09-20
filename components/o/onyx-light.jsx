import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl1kp80tz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl1kp80tz"/>`,
		"fallback": "selfhst:onyx-light",
	});
}

export default Component;
