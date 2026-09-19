import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6jtvebxf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6jtvebxf"/>`,
		"fallback": "fa7-brands:mastodon",
	});
}

export default Component;
