import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crskxccsk.css';
import '../../css/t/t_o6wlbhn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crskxccsk"/><path class="t_o6wlbhn"/>`,
		"fallback": "energy-icons:rotate-cw-48",
	});
}

export default Component;
