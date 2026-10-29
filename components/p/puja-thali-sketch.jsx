import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uzcqkeblz.css';
import '../../css/a/awnu8db8z.css';
import '../../css/x/xd7rb_b1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uzcqkeblz wm-k"/><path class="awnu8db8z wm-k"/><path class="wm-a xd7rb_b1q"/></g>`,
		"fallback": "withicons:puja-thali-sketch",
	});
}

export default Component;
