import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4-on4bsp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4-on4bsp"/>`,
		"fallback": "icon-park-outline:point",
	});
}

export default Component;
