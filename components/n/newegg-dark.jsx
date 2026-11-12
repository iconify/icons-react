import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmxodeb-e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmxodeb-e"/>`,
		"fallback": "selfhst:newegg-dark",
	});
}

export default Component;
