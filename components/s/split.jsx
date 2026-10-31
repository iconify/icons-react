import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/j5rbj8b1h.css';
import '../../css/h/hljce7egt.css';
import '../../css/x/xwal0ybbu.css';
import '../../css/y/y8o8afbbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="j5rbj8b1h wm-shadow"/><path class="hljce7egt wm-shadow"/><path class="xwal0ybbu"/><path class="y8o8afbbd"/></g>`,
		"fallback": "withicons-brutal:split",
	});
}

export default Component;
