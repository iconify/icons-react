import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zvivugbxc.css';
import '../../css/r/rqg6c4mxl.css';
import '../../css/m/mqf9i_b8w.css';
import '../../css/n/n-3392bwl.css';
import '../../css/e/e45klbbec.css';
import '../../css/v/vm7ivnb5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow zvivugbxc"/><path class="rqg6c4mxl"/><path class="mqf9i_b8w"/><path class="n-3392bwl wm-s"/><path class="e45klbbec wm-s"/><path class="vm7ivnb5y"/></g>`,
		"fallback": "withicons-retro:reindeer",
	});
}

export default Component;
