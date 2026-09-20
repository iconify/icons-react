import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyazfqf8o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyazfqf8o"/>`,
		"fallback": "selfhst:twitter-dark",
	});
}

export default Component;
