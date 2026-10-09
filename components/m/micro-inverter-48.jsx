import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsgp-8odn.css';
import '../../css/u/unq7cxbuf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsgp-8odn"/><path class="unq7cxbuf"/>`,
		"fallback": "energy-icons:micro-inverter-48",
	});
}

export default Component;
