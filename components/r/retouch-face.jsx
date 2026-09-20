import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p-m04xbnt.css';
import '../../css/g/gy5096y6r.css';
import '../../css/y/ygcqhfl1n.css';
import '../../css/v/vnlif0xfm.css';
import '../../css/r/rrjuf1puz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p-m04xbnt"/><path class="gy5096y6r"/><path class="ygcqhfl1n"/><path class="vnlif0xfm"/><path class="rrjuf1puz"/></g>`,
		"fallback": "streamline-freehand-color:retouch-face",
	});
}

export default Component;
