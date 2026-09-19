import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1hd5ebhz.css';
import '../../css/l/lyd-xwqcp.css';
import '../../css/n/ndnl__jzf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1hd5ebhz"/><path class="lyd-xwqcp"/><path class="ndnl__jzf"/>`,
		"fallback": "carbon:text-annotation-toggle",
	});
}

export default Component;
