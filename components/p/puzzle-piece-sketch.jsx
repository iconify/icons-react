import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/ctq7oybxk.css';
import '../../css/h/h6gqstbqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ctq7oybxk wm-k"/><path class="h6gqstbqn wm-k"/></g>`,
		"fallback": "withicons:puzzle-piece-sketch",
	});
}

export default Component;
