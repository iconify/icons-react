import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mzxeigbwf.css';
import '../../css/v/v4tc8db_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mzxeigbwf"/><path clip-rule="evenodd" class="v4tc8db_b"/></g>`,
		"fallback": "reicon:map-point-filled",
	});
}

export default Component;
