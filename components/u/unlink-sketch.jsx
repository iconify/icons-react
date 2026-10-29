import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tqgkj3bdo.css';
import '../../css/f/fy80l6xbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="tqgkj3bdo wm-k"/><path class="fy80l6xbv wm-s"/></g>`,
		"fallback": "withicons:unlink-sketch",
	});
}

export default Component;
