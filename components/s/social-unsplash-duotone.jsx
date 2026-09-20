import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp7n27b5q.css';
import '../../css/q/q5eclkb3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp7n27b5q"/><path clip-rule="evenodd" class="q5eclkb3c"/>`,
		"fallback": "stash:social-unsplash-duotone",
	});
}

export default Component;
