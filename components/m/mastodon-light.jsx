import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa-o7ac4e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa-o7ac4e"/>`,
		"fallback": "selfhst:mastodon-light",
	});
}

export default Component;
