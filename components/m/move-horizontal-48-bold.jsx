import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz8zsd5cc.css';
import '../../css/w/wived3hxr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz8zsd5cc"/><path class="wived3hxr"/>`,
		"fallback": "energy-icons:move-horizontal-48-bold",
	});
}

export default Component;
