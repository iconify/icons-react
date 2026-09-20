import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avd0ktjgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avd0ktjgd"/>`,
		"fallback": "uim:tumblr-alt",
	});
}

export default Component;
