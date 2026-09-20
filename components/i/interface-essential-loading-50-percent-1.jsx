import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-o-c1b4o.css';
import '../../css/x/xd2ndxbdp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-o-c1b4o"/><path class="xd2ndxbdp"/>`,
		"fallback": "streamline-pixel:interface-essential-loading-50-percent-1",
	});
}

export default Component;
