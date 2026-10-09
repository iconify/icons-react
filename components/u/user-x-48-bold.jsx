import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm2jupbhh.css';
import '../../css/a/acmio-sok.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm2jupbhh"/><path class="acmio-sok"/>`,
		"fallback": "energy-icons:user-x-48-bold",
	});
}

export default Component;
