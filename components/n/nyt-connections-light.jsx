import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z40zwbc9n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z40zwbc9n"/>`,
		"fallback": "selfhst:nyt-connections-light",
	});
}

export default Component;
