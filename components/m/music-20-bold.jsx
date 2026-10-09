import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbbi_6vwc.css';
import '../../css/x/xo70x1c7t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbbi_6vwc"/><path class="xo70x1c7t"/>`,
		"fallback": "energy-icons:music-20-bold",
	});
}

export default Component;
