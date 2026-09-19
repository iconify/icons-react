import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbv9h06jn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbv9h06jn"/>`,
		"fallback": "fa-solid:phone",
	});
}

export default Component;
