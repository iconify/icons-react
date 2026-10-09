import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np--nab8s.css';
import '../../css/b/b31s_0bsf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np--nab8s"/><path class="b31s_0bsf"/>`,
		"fallback": "energy-icons:send-horizontal-48-bold",
	});
}

export default Component;
