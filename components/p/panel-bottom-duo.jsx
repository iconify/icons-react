import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ux1wi_bpp.css';
import '../../css/e/e2_mtpbne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ux1wi_bpp"/><path class="e2_mtpbne"/></g>`,
		"fallback": "withicons:panel-bottom-duo",
	});
}

export default Component;
