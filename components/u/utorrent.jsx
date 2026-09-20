import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8gd5xbhf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8gd5xbhf"/>`,
		"fallback": "selfhst:utorrent",
	});
}

export default Component;
