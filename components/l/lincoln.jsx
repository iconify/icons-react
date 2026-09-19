import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/sz126lxhn.css';
import '../../css/f/f4kc0gbbi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="sz126lxhn"/><path class="f4kc0gbbi"/></g>`,
		"fallback": "icon-park-outline:lincoln",
	});
}

export default Component;
