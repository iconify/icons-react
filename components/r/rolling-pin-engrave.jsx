import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/erpaaj0nr.css';
import '../../css/j/jgyokzbac.css';
import '../../css/r/r43my2bli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="erpaaj0nr"/><path class="jgyokzbac wm-shadow"/><path class="r43my2bli"/></g>`,
		"fallback": "withicons:rolling-pin-engrave",
	});
}

export default Component;
