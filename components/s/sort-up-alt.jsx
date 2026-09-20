import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/x/x3x5w2oyz.css';
import '../../css/u/up7zc7bxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="x3x5w2oyz"/><path class="up7zc7bxz"/></g>`,
		"fallback": "lets-icons:sort-up-alt",
	});
}

export default Component;
