import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ne9h2q9lb.css';
import '../../css/p/pi3extchy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ne9h2q9lb"/><path class="pi3extchy"/></g>`,
		"fallback": "bi:safe2-fill",
	});
}

export default Component;
