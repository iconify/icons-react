import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t918cikpr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t918cikpr"/>`,
		"fallback": "selfhst:miles-and-more-dark",
	});
}

export default Component;
