import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc9z0ibda.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uc9z0ibda"/>`,
		"fallback": "energy-icons:shirt-48",
	});
}

export default Component;
