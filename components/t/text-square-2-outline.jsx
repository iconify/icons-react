import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/atcd-6o6g.css';
import '../../css/h/hlwg4740c.css';
import '../../css/g/g2f0sqbvn.css';
import '../../css/i/iy0w9djnl.css';
import '../../css/u/u5i9gib1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="atcd-6o6g"/><path class="hlwg4740c"/><path class="g2f0sqbvn"/><path class="iy0w9djnl"/><path class="u5i9gib1e"/></g>`,
		"fallback": "solar:text-square-2-outline",
	});
}

export default Component;
