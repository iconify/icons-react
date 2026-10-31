import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/ydu6i3b1c.css';
import '../../css/q/q8nqxnf2b.css';
import '../../css/h/heg0hjblo.css';
import '../../css/n/nyyaa3u0w.css';
import '../../css/p/p4ra5frnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow ydu6i3b1c"/><path class="q8nqxnf2b wm-shadow"/><path class="heg0hjblo"/><path class="nyyaa3u0w"/><path class="p4ra5frnv wm-s"/></g>`,
		"fallback": "withicons-brutal:mouse-pointer-click",
	});
}

export default Component;
