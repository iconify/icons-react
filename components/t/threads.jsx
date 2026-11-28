import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rfq1tw_nw.css';
import '../../css/u/u8ejbjb9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="rfq1tw_nw"/><path class="u8ejbjb9g"/></g>`,
		"fallback": "iconaut:threads",
	});
}

export default Component;
