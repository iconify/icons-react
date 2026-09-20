import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ide3bkb9l.css';
import '../../css/e/etxjarbfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ide3bkb9l"/><path class="etxjarbfi"/></g>`,
		"fallback": "reicon:location-tick",
	});
}

export default Component;
