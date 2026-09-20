import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz3uhdcoz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz3uhdcoz"/>`,
		"fallback": "subway:right-arrow-1",
	});
}

export default Component;
