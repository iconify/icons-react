import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/t/tcwe4ewrv.css';
import '../../css/j/jfdz753ks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><circle class="tcwe4ewrv"/><path class="jfdz753ks"/></g>`,
		"fallback": "lets-icons:user-alt",
	});
}

export default Component;
