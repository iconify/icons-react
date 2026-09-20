import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/v/vrcs43bej.css';
import '../../css/n/nztxrfbmp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="vrcs43bej"/><path class="nztxrfbmp"/></g>`,
		"fallback": "streamline-plump:tag-alt",
	});
}

export default Component;
