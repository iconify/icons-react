import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jdfzogbtf.css';
import '../../css/w/w7kp7k2kk.css';
import '../../css/q/qfwv274_r.css';
import '../../css/g/ga-n9actm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jdfzogbtf"/><path clip-rule="evenodd" class="w7kp7k2kk"/><path class="qfwv274_r"/><path class="ga-n9actm"/></g>`,
		"fallback": "andrsrxn:refresh-sparkle",
	});
}

export default Component;
