import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ilbc9tc8n.css';
import '../../css/u/uusfhccwf.css';
import '../../css/r/r4a85nb6r.css';
import '../../css/h/hfqd4dtjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ilbc9tc8n"/><rect class="uusfhccwf"/><path class="r4a85nb6r"/><path class="hfqd4dtjv"/></g>`,
		"fallback": "proicons:linux",
	});
}

export default Component;
