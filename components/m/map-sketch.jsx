import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jmbz2vb9o.css';
import '../../css/z/zlsqrnbma.css';
import '../../css/h/hurexej9d.css';
import '../../css/t/t-at26brw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jmbz2vb9o"/><path class="wm-k zlsqrnbma"/><path class="hurexej9d wm-k"/><path class="t-at26brw wm-a"/></g>`,
		"fallback": "withicons:map-sketch",
	});
}

export default Component;
