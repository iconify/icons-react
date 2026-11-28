import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ia0ainb7h.css';
import '../../css/p/pu4i0cblx.css';
import '../../css/j/jsa_ui-gx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ia0ainb7h"/><path class="pu4i0cblx"/><path class="jsa_ui-gx"/></g>`,
		"fallback": "iconaut:martini",
	});
}

export default Component;
