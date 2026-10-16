import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho23u0lfr.css';
import '../../css/w/wd1lkbb-n.css';
import '../../css/t/t_7qy9b-e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ho23u0lfr"/><path class="wd1lkbb-n"/><path class="t_7qy9b-e"/>`,
		"fallback": "energy-icons:pickup-truck-48",
	});
}

export default Component;
