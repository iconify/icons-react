import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0zgyobhy.css';
import '../../css/s/su9vssb1b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0zgyobhy"/><path class="su9vssb1b"/>`,
		"fallback": "flag:kg-1x1",
	});
}

export default Component;
