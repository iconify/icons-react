import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/z/zpix_vfjr.css';
import '../../css/i/ide3bkb9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="zpix_vfjr"/><path class="ide3bkb9l"/></g>`,
		"fallback": "reicon:location-minus",
	});
}

export default Component;
