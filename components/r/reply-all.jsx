import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wop4crbve.css';
import '../../css/r/r3rj8nbts.css';
import '../../css/r/rt4-vfbde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow wop4crbve"/><path class="r3rj8nbts wm-shadow"/><path class="rt4-vfbde"/></g>`,
		"fallback": "withicons-brutal:reply-all",
	});
}

export default Component;
