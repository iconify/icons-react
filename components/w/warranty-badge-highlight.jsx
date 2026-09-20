import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p9tz_y6cx.css';
import '../../css/s/sx2yqebxa.css';
import '../../css/f/f5o0mhbgd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p9tz_y6cx"/><path class="sx2yqebxa"/><path class="f5o0mhbgd"/></g>`,
		"fallback": "streamline-flex-color:warranty-badge-highlight",
	});
}

export default Component;
