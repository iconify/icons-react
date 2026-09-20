import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iu8ds1bys.css';
import '../../css/d/d2tgmoz-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iu8ds1bys"/><path class="d2tgmoz-m"/></g>`,
		"fallback": "reicon:logout4-filled",
	});
}

export default Component;
