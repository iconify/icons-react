import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/u/up1fh7bkb.css';
import '../../css/q/q8z29yb9o.css';
import '../../css/a/avfi11eud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="up1fh7bkb"/><path class="q8z29yb9o"/><path class="avfi11eud"/></g>`,
		"fallback": "streamline-logos:nintendo-network-logo",
	});
}

export default Component;
