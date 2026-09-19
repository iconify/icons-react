import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvilx1q3c.css';
import '../../css/b/bf87ls_wi.css';
import '../../css/v/vg4c8senf.css';
import '../../css/l/lcxi6jbsf.css';
import '../../css/k/khgmiwbkn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kvilx1q3c"><path class="bf87ls_wi"/><path class="vg4c8senf"/><path class="lcxi6jbsf"/><path class="khgmiwbkn"/></g>`,
		"fallback": "icon-park:waterfalls-h",
	});
}

export default Component;
