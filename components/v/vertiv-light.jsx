import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7gd6cbmi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7gd6cbmi"/>`,
		"fallback": "selfhst:vertiv-light",
	});
}

export default Component;
