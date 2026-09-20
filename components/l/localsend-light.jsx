import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up1da4b_s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up1da4b_s"/>`,
		"fallback": "selfhst:localsend-light",
	});
}

export default Component;
