import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r-9nwwbxk.css';
import '../../css/i/i7-z0u50z.css';
import '../../css/p/p6hfr5jqi.css';
import '../../css/n/nyk-aacqc.css';
import '../../css/n/n9wuif3qm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r-9nwwbxk"/><path class="i7-z0u50z"/><path class="p6hfr5jqi"/><path class="nyk-aacqc"/><path class="n9wuif3qm"/></g>`,
		"fallback": "grommet-icons:tictok",
	});
}

export default Component;
