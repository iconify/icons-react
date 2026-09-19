import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2r6-ab1b.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2r6-ab1b"/>`,
		"fallback": "fa6-brands:mastodon",
	});
}

export default Component;
