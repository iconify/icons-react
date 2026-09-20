import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e0tnukbhf.css';
import '../../css/m/m-tt6fcof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><rect class="e0tnukbhf"/><path class="m-tt6fcof"/></g>`,
		"fallback": "proicons:video-clip",
	});
}

export default Component;
