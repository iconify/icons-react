import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wcute_4vd.css';
import '../../css/c/c4_wodreq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wcute_4vd"/><path class="c4_wodreq wm-a"/></g>`,
		"fallback": "withicons:thermometer",
	});
}

export default Component;
