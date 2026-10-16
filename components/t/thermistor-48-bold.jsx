import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb-7heutx.css';
import '../../css/b/bgfe5mgwh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb-7heutx"/><path class="bgfe5mgwh"/>`,
		"fallback": "energy-icons:thermistor-48-bold",
	});
}

export default Component;
