import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vwzncsbmf.css';
import '../../css/z/zub4acc2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vwzncsbmf"/><path class="wm-a zub4acc2g"/></g>`,
		"fallback": "withicons:panel-right-close",
	});
}

export default Component;
