import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/e/ejhs2ub5n.css';
import '../../css/j/j8v342ebz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ejhs2ub5n"/><path class="j8v342ebz"/></g>`,
		"fallback": "icon-park-solid:two-dimensional-code",
	});
}

export default Component;
