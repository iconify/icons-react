import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fg3cv2kdo.css';
import '../../css/k/k22g0i2az.css';
import '../../css/j/jo6urw9ef.css';
import '../../css/d/dv5lb9b_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fg3cv2kdo"/><path class="k22g0i2az wm-k"/><path class="jo6urw9ef wm-k"/><path class="dv5lb9b_r wm-a"/></g>`,
		"fallback": "withicons:message-circle-more-sketch",
	});
}

export default Component;
