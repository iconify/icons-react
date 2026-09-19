import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebldvkbho.css';
import '../../css/o/oz4mxp5be.css';
import '../../css/y/ylly5hb5v.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebldvkbho"/><path class="oz4mxp5be"/><path class="ylly5hb5v"/>`,
		"fallback": "ei:plus",
	});
}

export default Component;
