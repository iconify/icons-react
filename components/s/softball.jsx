import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3dpzbtra.css';
import '../../css/w/w1xy-_b1v.css';
import '../../css/w/wg57ytibm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y3dpzbtra"><path class="w1xy-_b1v"/><path class="wg57ytibm"/></g>`,
		"fallback": "icon-park-outline:softball",
	});
}

export default Component;
