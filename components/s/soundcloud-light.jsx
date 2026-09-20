import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzou0sbba.css';

const viewBox = {"width":75,"height":33.51};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzou0sbba"/>`,
		"fallback": "thesvg-color:soundcloud-light",
	});
}

export default Component;
