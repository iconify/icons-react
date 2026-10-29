import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nn7g7rqyu.css';
import '../../css/f/flfje358z.css';
import '../../css/u/urlzan7ys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nn7g7rqyu"/><path class="flfje358z wm-shadow"/><path class="urlzan7ys"/></g>`,
		"fallback": "withicons:pause-engrave",
	});
}

export default Component;
