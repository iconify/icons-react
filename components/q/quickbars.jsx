import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7bxye5gu.css';
import '../../css/f/f0tftrz9n.css';
import '../../css/m/m41x7yb6k.css';
import '../../css/o/o1r8z0b3m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7bxye5gu"/><path class="f0tftrz9n"/><path class="m41x7yb6k"/><path class="o1r8z0b3m"/>`,
		"fallback": "selfhst:quickbars",
	});
}

export default Component;
