import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ljl08gbjs.css';
import '../../css/q/qyk39-brz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ljl08gbjs"/><path class="qyk39-brz"/></g>`,
		"fallback": "iconamoon:shield-yes-thin",
	});
}

export default Component;
