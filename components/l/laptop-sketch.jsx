import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dom870b0k.css';
import '../../css/g/g83y6wzjj.css';
import '../../css/h/h7irlhbzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dom870b0k wm-k"/><path class="g83y6wzjj wm-k"/><path class="h7irlhbzn wm-a"/></g>`,
		"fallback": "withicons:laptop-sketch",
	});
}

export default Component;
