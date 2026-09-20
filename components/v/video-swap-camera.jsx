import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cw4sn7b4o.css';
import '../../css/d/d-drzdbxc.css';
import '../../css/w/wkxl-qb3q.css';
import '../../css/u/unxyci1_z.css';
import '../../css/b/bkk40wbwl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cw4sn7b4o"/><path class="d-drzdbxc"/><path class="wkxl-qb3q"/><path class="unxyci1_z"/><path class="bkk40wbwl"/></g>`,
		"fallback": "streamline-color:video-swap-camera",
	});
}

export default Component;
