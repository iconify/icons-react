import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fgbgd-38a.css';
import '../../css/v/vob1wqbbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="fgbgd-38a"/><path class="vob1wqbbe"/></g>`,
		"fallback": "iconaut:moon-haze",
	});
}

export default Component;
