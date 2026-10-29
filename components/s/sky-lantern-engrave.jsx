import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qjvmaw2je.css';
import '../../css/u/u09_-ec4s.css';
import '../../css/e/evf_t2cfu.css';
import '../../css/w/w7qq1ntbn.css';
import '../../css/z/z8twkcj3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qjvmaw2je wm-k"/><path class="u09_-ec4s wm-a"/><path class="evf_t2cfu wm-shadow"/><path class="w7qq1ntbn wm-k"/><path class="wm-a z8twkcj3l"/></g>`,
		"fallback": "withicons:sky-lantern-engrave",
	});
}

export default Component;
