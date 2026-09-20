import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/k/k6ptnkbdv.css';
import '../../css/b/b97yfdb1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="k6ptnkbdv"/><path class="b97yfdb1n"/></g>`,
		"fallback": "lets-icons:package-favourite-alt",
	});
}

export default Component;
