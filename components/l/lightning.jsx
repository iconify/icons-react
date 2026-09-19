import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qoltyqy_e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qoltyqy_e"/>`,
		"fallback": "icon-park-outline:lightning",
	});
}

export default Component;
