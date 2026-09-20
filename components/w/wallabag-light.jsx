import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzq9j2bzw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzq9j2bzw"/>`,
		"fallback": "selfhst:wallabag-light",
	});
}

export default Component;
