import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nbtn6r3qe.css';
import '../../css/z/z7rsvjb5o.css';
import '../../css/o/o1fxrtmvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nbtn6r3qe"/><path class="wm-shadow z7rsvjb5o"/><path class="o1fxrtmvk"/></g>`,
		"fallback": "withicons:sigma-engrave",
	});
}

export default Component;
