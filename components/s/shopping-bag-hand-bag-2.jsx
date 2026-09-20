import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yt671o8qb.css';
import '../../css/n/nl2119o8o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yt671o8qb"/><path class="nl2119o8o"/></g>`,
		"fallback": "streamline-color:shopping-bag-hand-bag-2",
	});
}

export default Component;
