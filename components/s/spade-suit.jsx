import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpsiiab0r.css';
import '../../css/x/xs8xf5a_d.css';
import '../../css/w/wl_075bhu.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/w/wewcxs-cp.css';
import '../../css/m/m9bybwbxc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dpsiiab0r"><path class="xs8xf5a_d"/><path class="wl_075bhu"/></g><g class="jn8qy4bru"><path class="wewcxs-cp"/><path class="m9bybwbxc"/></g>`,
		"fallback": "openmoji:spade-suit",
	});
}

export default Component;
