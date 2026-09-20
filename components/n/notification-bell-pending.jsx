import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pjiztkldl.css';
import '../../css/r/rwmnp2bmg.css';
import '../../css/r/r057cwbhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pjiztkldl"/><path class="rwmnp2bmg"/><circle class="r057cwbhu"/></g>`,
		"fallback": "mage:notification-bell-pending",
	});
}

export default Component;
