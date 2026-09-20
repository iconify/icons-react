import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/d/dkcq_3bce.css';
import '../../css/x/x7ma4bcwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="dkcq_3bce"/><path class="x7ma4bcwe"/></g>`,
		"fallback": "lets-icons:scan-alt-2-light",
	});
}

export default Component;
