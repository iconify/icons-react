import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/t/t3lvcmxtq.css';
import '../../css/k/kraidjvrx.css';
import '../../css/d/de8wv2j4l.css';
import '../../css/u/uz4ph3b3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="t3lvcmxtq"/><path class="kraidjvrx wm-k"/><path class="de8wv2j4l wm-a"/><path class="uz4ph3b3b wm-s"/></g>`,
		"fallback": "withicons-kawaii:rakhi",
	});
}

export default Component;
