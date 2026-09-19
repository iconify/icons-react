import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8ft-ub9s.css';

const viewBox = {"width":1026,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8ft-ub9s"/>`,
		"fallback": "whh:splitalt",
	});
}

export default Component;
