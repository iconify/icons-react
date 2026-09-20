import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llncxpb1h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llncxpb1h"/>`,
		"fallback": "selfhst:thingsboard-dark",
	});
}

export default Component;
