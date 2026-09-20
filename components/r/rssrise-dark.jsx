import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq7ek5b7l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq7ek5b7l"/>`,
		"fallback": "selfhst:rssrise-dark",
	});
}

export default Component;
