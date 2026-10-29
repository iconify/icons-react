import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oan3fnbps.css';
import '../../css/w/wc2i5q86a.css';
import '../../css/l/lj8hq4byv.css';
import '../../css/p/pkdx_7b-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="oan3fnbps"/><path class="wc2i5q86a wm-a"/><path class="lj8hq4byv"/><path class="pkdx_7b-x"/></g>`,
		"fallback": "withicons:radar-duo",
	});
}

export default Component;
