import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b4e3e4bng.css';
import '../../css/n/nrtl1pboi.css';
import '../../css/h/h-m5r7btd.css';
import '../../css/g/gccckqbrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="b4e3e4bng"/><path class="nrtl1pboi wm-a"/><path class="h-m5r7btd wm-k"/><path class="gccckqbrx wm-a"/></g>`,
		"fallback": "withicons:video-call-sketch",
	});
}

export default Component;
