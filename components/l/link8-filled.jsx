import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fnvd_nbng.css';
import '../../css/x/xh4ak_h5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fnvd_nbng"/><path class="xh4ak_h5z"/></g>`,
		"fallback": "reicon:link8-filled",
	});
}

export default Component;
