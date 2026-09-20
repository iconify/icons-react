import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpq9bk8pg.css';
import '../../css/c/c9mzmqb3q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpq9bk8pg"/><path class="c9mzmqb3q"/>`,
		"fallback": "selfhst:waze",
	});
}

export default Component;
