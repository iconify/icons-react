import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wzt-llnww.css';
import '../../css/x/x51y-mbde.css';
import '../../css/k/ki6btebfd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wzt-llnww"/><path class="x51y-mbde"/><path class="ki6btebfd"/></g>`,
		"fallback": "streamline-color:recycle-bin-2",
	});
}

export default Component;
