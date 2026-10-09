import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co-y23bkw.css';
import '../../css/a/aui1l8ddh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co-y23bkw"/><path class="aui1l8ddh"/>`,
		"fallback": "energy-icons:oven-48",
	});
}

export default Component;
