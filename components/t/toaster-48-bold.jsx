import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1efy3xti.css';
import '../../css/t/t1wq7pbzx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1efy3xti"/><path class="t1wq7pbzx"/>`,
		"fallback": "energy-icons:toaster-48-bold",
	});
}

export default Component;
