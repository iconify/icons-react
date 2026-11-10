import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rz7ip6tjn.css';
import '../../css/n/nabrzrbgg.css';
import '../../css/w/wv3mgdgqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rz7ip6tjn"/><path class="nabrzrbgg"/><path class="wv3mgdgqc"/></g>`,
		"fallback": "andrsrxn:mail",
	});
}

export default Component;
