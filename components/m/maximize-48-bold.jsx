import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by36c192e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by36c192e"/>`,
		"fallback": "energy-icons:maximize-48-bold",
	});
}

export default Component;
