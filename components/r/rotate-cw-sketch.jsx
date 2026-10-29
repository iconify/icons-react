import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wqnb7yhih.css';
import '../../css/x/x_-hjm_0s.css';
import '../../css/o/oqn6xvsmt.css';
import '../../css/g/gji7ap19f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k wqnb7yhih"/><path class="wm-a x_-hjm_0s"/><path class="oqn6xvsmt wm-k"/><path class="gji7ap19f wm-a"/></g>`,
		"fallback": "withicons:rotate-cw-sketch",
	});
}

export default Component;
