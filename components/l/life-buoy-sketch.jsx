import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m05ok2q9c.css';
import '../../css/i/i84v56bxz.css';
import '../../css/k/k808-jbxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="m05ok2q9c"/><path class="i84v56bxz wm-k"/><path class="k808-jbxa wm-a"/></g>`,
		"fallback": "withicons:life-buoy-sketch",
	});
}

export default Component;
