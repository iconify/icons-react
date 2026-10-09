import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd-j1738m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd-j1738m"/>`,
		"fallback": "energy-icons:maximize-48",
	});
}

export default Component;
