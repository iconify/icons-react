import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpdzdksvp.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpdzdksvp"/>`,
		"fallback": "dinkie-icons:shortcake",
	});
}

export default Component;
