import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/r/r8cyu3bwz.css';
import '../../css/v/vb4immbia.css';
import '../../css/p/pyd589bxf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect class="r8cyu3bwz"/><path class="vb4immbia"/><path class="pyd589bxf"/></g>`,
		"fallback": "icon-park-outline:view-grid-list",
	});
}

export default Component;
