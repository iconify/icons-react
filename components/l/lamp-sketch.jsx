import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lwz7j4b-a.css';
import '../../css/d/dv0pewh6k.css';
import '../../css/n/n-ttdbbjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lwz7j4b-a wm-deco"/><path class="dv0pewh6k wm-k"/><path class="n-ttdbbjs wm-k"/></g>`,
		"fallback": "withicons:lamp-sketch",
	});
}

export default Component;
