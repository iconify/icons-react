import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/uj5cy5bua.css';
import '../../css/b/budh-ibnk.css';
import '../../css/l/lquc-8umo.css';
import '../../css/k/kqp12bb3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="uj5cy5bua wm-shadow"/><path class="budh-ibnk wm-shadow"/><path class="lquc-8umo"/><path class="kqp12bb3r"/></g>`,
		"fallback": "withicons-brutal:skip-forward",
	});
}

export default Component;
