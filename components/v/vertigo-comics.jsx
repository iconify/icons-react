import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_nk98b2c.css';
import '../../css/d/d9qn9ybwj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_nk98b2c"/><path class="d9qn9ybwj"/>`,
		"fallback": "selfhst:vertigo-comics",
	});
}

export default Component;
