import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ng44pd0kk.css';
import '../../css/s/s2k1ilb9r.css';
import '../../css/r/rsu45zejk.css';
import '../../css/n/n5-xw5utp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ng44pd0kk"/><rect class="s2k1ilb9r"/><path class="rsu45zejk"/><path class="n5-xw5utp"/></g>`,
		"fallback": "andrsrxn:mails",
	});
}

export default Component;
