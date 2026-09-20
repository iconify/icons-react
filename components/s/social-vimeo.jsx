import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9qwmvb5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9qwmvb5v"/>`,
		"fallback": "typcn:social-vimeo",
	});
}

export default Component;
