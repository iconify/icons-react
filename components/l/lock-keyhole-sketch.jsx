import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vo_7bsbnm.css';
import '../../css/d/dpskx5bja.css';
import '../../css/g/gooo09bjz.css';
import '../../css/y/y30swkuwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vo_7bsbnm"/><path class="dpskx5bja wm-a"/><path class="gooo09bjz wm-k"/><path class="wm-a y30swkuwo"/></g>`,
		"fallback": "withicons:lock-keyhole-sketch",
	});
}

export default Component;
