import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrhhv18_e.css';
import '../../css/x/xo6w-xw4o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrhhv18_e"/><path class="xo6w-xw4o"/>`,
		"fallback": "energy-icons:voltage-tester-48-bold",
	});
}

export default Component;
