import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/r8cyu3bwz.css';
import '../../css/q/q-vig9vwl.css';
import '../../css/s/sl781pbgn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="r8cyu3bwz"/><path class="q-vig9vwl"/><path class="sl781pbgn"/></g>`,
		"fallback": "icon-park-outline:powerpoint",
	});
}

export default Component;
