import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jt065lb1t.css';
import '../../css/a/aoqg6rbad.css';
import '../../css/s/sfp-qh-hh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jt065lb1t"/><path class="aoqg6rbad wm-shadow"/><path class="sfp-qh-hh"/></g>`,
		"fallback": "withicons:moon-engrave",
	});
}

export default Component;
