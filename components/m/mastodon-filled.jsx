import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj8y-ybio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj8y-ybio"/>`,
		"fallback": "griddy-icons:mastodon-filled",
	});
}

export default Component;
