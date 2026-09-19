import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/g/go7a7eb-c.css';
import '../../css/b/b482eebvh.css';
import '../../css/g/g5_p9yb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="go7a7eb-c"/><path class="b482eebvh"/><path class="g5_p9yb8y"/></g>`,
		"fallback": "hugeicons:tv-issue",
	});
}

export default Component;
