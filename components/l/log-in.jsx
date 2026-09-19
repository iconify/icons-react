import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpjqfiz0q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpjqfiz0q"/>`,
		"fallback": "ion:log-in",
	});
}

export default Component;
