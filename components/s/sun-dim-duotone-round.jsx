import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wql_3nbpq.css';
import '../../css/m/mxgfszb4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wql_3nbpq"/><path class="mxgfszb4w"/></g>`,
		"fallback": "coolicons:sun-dim-duotone-round",
	});
}

export default Component;
