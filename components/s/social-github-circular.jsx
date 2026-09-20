import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1-6q3lmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1-6q3lmy"/>`,
		"fallback": "typcn:social-github-circular",
	});
}

export default Component;
