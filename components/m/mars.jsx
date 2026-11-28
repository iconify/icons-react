import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mf-b0qbej.css';
import '../../css/u/u2h6v2jyt.css';
import '../../css/i/i3vad_bkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mf-b0qbej"/><path class="u2h6v2jyt"/><path class="i3vad_bkp"/></g>`,
		"fallback": "iconaut:mars",
	});
}

export default Component;
