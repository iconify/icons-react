import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_d8j4ckm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_d8j4ckm"/>`,
		"fallback": "fa-solid:sms",
	});
}

export default Component;
