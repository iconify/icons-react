import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u6p3f_w7t.css';
import '../../css/a/aum9qxb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="u6p3f_w7t"/><path class="aum9qxb0o"/></g>`,
		"fallback": "hugeicons:loading-01",
	});
}

export default Component;
