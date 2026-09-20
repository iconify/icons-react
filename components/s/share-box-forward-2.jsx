import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/coua9dh4q.css';
import '../../css/v/vtntose4b.css';
import '../../css/s/sk5w04s4r.css';
import '../../css/a/agkp_q8rb.css';
import '../../css/o/ohs42bcgk.css';
import '../../css/m/mvtgq8bms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="coua9dh4q"/><path class="vtntose4b"/><path class="sk5w04s4r"/><path class="agkp_q8rb"/><path class="ohs42bcgk"/><path class="mvtgq8bms"/></g>`,
		"fallback": "streamline-cyber-color:share-box-forward-2",
	});
}

export default Component;
