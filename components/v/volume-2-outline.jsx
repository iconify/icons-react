import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/l/lbsc7q7-t.css';
import '../../css/h/h8kmhmbrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="lbsc7q7-t"/><path class="h8kmhmbrs"/></g>`,
		"fallback": "bitcoin-icons:volume-2-outline",
	});
}

export default Component;
