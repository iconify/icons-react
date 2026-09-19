import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krn9eiidq.css';
import '../../css/y/ypuxzcc_r.css';
import '../../css/e/e2_x5zb1o.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krn9eiidq"/><path class="ypuxzcc_r"/><path class="e2_x5zb1o"/>`,
		"fallback": "ep:watch",
	});
}

export default Component;
