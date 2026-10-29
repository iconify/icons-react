import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p1ms0ib3o.css';
import '../../css/y/ynjdmqhwg.css';
import '../../css/y/y5h00ybfd.css';
import '../../css/x/x3hf-5b-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="p1ms0ib3o wm-k"/><path class="wm-k ynjdmqhwg"/><path class="wm-s y5h00ybfd"/><path class="wm-s x3hf-5b-i"/></g>`,
		"fallback": "withicons:video-off-sketch",
	});
}

export default Component;
