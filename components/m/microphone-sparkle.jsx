import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bwghfsbpm.css';
import '../../css/q/q4_j-gbej.css';
import '../../css/l/lqki5ywos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bwghfsbpm"/><path class="q4_j-gbej"/><path class="lqki5ywos"/></g>`,
		"fallback": "andrsrxn:microphone-sparkle",
	});
}

export default Component;
