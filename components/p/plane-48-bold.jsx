import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz4--lb9c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz4--lb9c"/>`,
		"fallback": "energy-icons:plane-48-bold",
	});
}

export default Component;
