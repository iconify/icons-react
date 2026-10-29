import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/d2rk8jb9a.css';
import '../../css/q/qy3sbkj_s.css';
import '../../css/u/udxsowrax.css';
import '../../css/f/fnqqe5b5e.css';
import '../../css/c/c7xnwmbpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="d2rk8jb9a wm-k"/><path class="qy3sbkj_s wm-a"/><path class="udxsowrax wm-shadow"/><path class="fnqqe5b5e wm-k"/><path class="c7xnwmbpp wm-a"/></g>`,
		"fallback": "withicons:trash-engrave",
	});
}

export default Component;
