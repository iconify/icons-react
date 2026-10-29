import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pfgi2nbvf.css';
import '../../css/w/wrc723bxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pfgi2nbvf"/><path class="wm-a wrc723bxq"/></g>`,
		"fallback": "withicons:ungroup",
	});
}

export default Component;
