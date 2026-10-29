import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/otjhq3msn.css';
import '../../css/w/w_-br4fut.css';
import '../../css/d/dskvm8pys.css';
import '../../css/b/b8dind9ra.css';
import '../../css/i/i2by-6hyx.css';
import '../../css/y/y-a0zp3fa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="otjhq3msn wm-k"/><path class="w_-br4fut wm-k"/><path class="dskvm8pys wm-k"/><path class="b8dind9ra wm-a"/><path class="i2by-6hyx wm-a"/><path class="wm-a y-a0zp3fa"/></g>`,
		"fallback": "withicons-anime:language",
	});
}

export default Component;
