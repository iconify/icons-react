import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3raaguch.css';
import '../../css/u/ucy4am5fc.css';
import '../../css/z/z9ls-lbhr.css';
import '../../css/b/brou24w_x.css';
import '../../css/q/qtu8m3bzg.css';
import '../../css/f/fz267xb4n.css';
import '../../css/h/hzlc3elmr.css';
import '../../css/x/xu_9iwuid.css';
import '../../css/g/giw0d-b8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3raaguch wm-shadow"/><path class="ucy4am5fc wm-k"/><path class="wm-k z9ls-lbhr"/><path class="brou24w_x wm-k"/><path class="qtu8m3bzg wm-k"/><path class="fz267xb4n wm-k"/><path class="hzlc3elmr wm-shine"/><path class="wm-k xu_9iwuid"/><path class="giw0d-b8b wm-a"/>`,
		"fallback": "withicons-pastel:message-circle-question",
	});
}

export default Component;
