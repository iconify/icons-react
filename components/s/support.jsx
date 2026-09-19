import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knxfsw6ry.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knxfsw6ry"/>`,
		"fallback": "flat-color-icons:support",
	});
}

export default Component;
