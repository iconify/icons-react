import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qj7tvf8mc.css';
import '../../css/w/w159qr-wq.css';
import '../../css/c/csa53darn.css';
import '../../css/v/vywh8ob7f.css';
import '../../css/l/l8_xk16co.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qj7tvf8mc"/><path class="w159qr-wq wm-k"/><path class="csa53darn wm-a"/><path class="vywh8ob7f wm-k"/><path class="l8_xk16co wm-a"/></g>`,
		"fallback": "withicons:message-circle-question-sketch",
	});
}

export default Component;
