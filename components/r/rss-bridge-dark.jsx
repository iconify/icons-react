import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgil3hbqk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgil3hbqk"/>`,
		"fallback": "selfhst:rss-bridge-dark",
	});
}

export default Component;
