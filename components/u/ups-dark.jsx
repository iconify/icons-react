import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9rq-8b5n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9rq-8b5n"/>`,
		"fallback": "selfhst:ups-dark",
	});
}

export default Component;
