import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/iim7lrbsa.css';
import '../../css/w/wcn22lccd.css';
import '../../css/y/yl2qgibmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="iim7lrbsa"/><path class="wcn22lccd"/><path class="yl2qgibmn"/></g>`,
		"fallback": "hugeicons:store-03",
	});
}

export default Component;
