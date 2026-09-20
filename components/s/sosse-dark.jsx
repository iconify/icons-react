import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvy3kqb7m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvy3kqb7m"/>`,
		"fallback": "selfhst:sosse-dark",
	});
}

export default Component;
