import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/h/hvb_mgbxp.css';
import '../../css/o/owdwaw4ke.css';
import '../../css/f/f_qg2bg2p.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="hvb_mgbxp"/><path class="owdwaw4ke"/><path class="f_qg2bg2p"/></g>`,
		"fallback": "system-uicons:retweet",
	});
}

export default Component;
