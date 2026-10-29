import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx0ze2q_o.css';
import '../../css/w/wsv04yb4u.css';
import '../../css/q/qy50xacio.css';
import '../../css/c/cv7359bwk.css';
import '../../css/z/zck36dw4l.css';
import '../../css/d/db7zur54e.css';
import '../../css/i/iis3facsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow xx0ze2q_o"/><path class="wsv04yb4u"/><path class="qy50xacio"/><path class="cv7359bwk"/><path class="zck36dw4l"/><path class="db7zur54e wm-shine"/><path class="iis3facsm"/>`,
		"fallback": "withicons-plush:plus",
	});
}

export default Component;
