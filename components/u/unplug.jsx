import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jjv2kpbta.css';
import '../../css/n/nj3baebej.css';
import '../../css/s/sp6vbkbyx.css';
import '../../css/d/dgnq8mbcp.css';
import '../../css/s/svy_2tb6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="jjv2kpbta wm-shadow"/><path class="nj3baebej wm-shadow"/><path class="sp6vbkbyx"/><path class="dgnq8mbcp"/><path class="svy_2tb6z wm-s"/></g>`,
		"fallback": "withicons-brutal:unplug",
	});
}

export default Component;
