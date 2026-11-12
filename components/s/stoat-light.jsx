import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6er-z6mu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6er-z6mu"/>`,
		"fallback": "selfhst:stoat-light",
	});
}

export default Component;
