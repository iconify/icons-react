import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/udwzgwv5k.css';
import '../../css/w/wdvj95emn.css';
import '../../css/o/ohtj0i3jo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="udwzgwv5k wm-k"/><path class="wdvj95emn"/><path class="ohtj0i3jo wm-s"/></g>`,
		"fallback": "withicons-bauhaus:server-off",
	});
}

export default Component;
