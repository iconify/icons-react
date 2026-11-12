import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayj5n7qxt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayj5n7qxt"/>`,
		"fallback": "selfhst:notifiarr-light",
	});
}

export default Component;
