import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7eewub9u.css';
import '../../css/x/x4yr5kbub.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7eewub9u"/><path class="x4yr5kbub"/>`,
		"fallback": "selfhst:rarbg",
	});
}

export default Component;
