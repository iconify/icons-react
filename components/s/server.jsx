import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/no92fbboy.css';
import '../../css/z/zjq93dtts.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="no92fbboy"/><path class="zjq93dtts"/></g>`,
		"fallback": "icon-park-outline:server",
	});
}

export default Component;
