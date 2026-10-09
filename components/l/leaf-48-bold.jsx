import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3hcjybun.css';
import '../../css/s/sq0k58bdr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3hcjybun"/><path class="sq0k58bdr"/>`,
		"fallback": "energy-icons:leaf-48-bold",
	});
}

export default Component;
