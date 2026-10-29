import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jbeiewgbz.css';
import '../../css/o/ogu_r4rwb.css';
import '../../css/q/qntre5byd.css';
import '../../css/y/yb05owbgu.css';
import '../../css/g/g0hitnb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jbeiewgbz"/><path class="ogu_r4rwb wm-k"/><path class="qntre5byd wm-a"/><path class="wm-k yb05owbgu"/><path class="g0hitnb-s wm-a"/></g>`,
		"fallback": "withicons:trees-sketch",
	});
}

export default Component;
