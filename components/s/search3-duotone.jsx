import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rbjoz8b4e.css';
import '../../css/m/mdb-6xbip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rbjoz8b4e"/><path clip-rule="evenodd" class="mdb-6xbip"/></g>`,
		"fallback": "reicon:search3-duotone",
	});
}

export default Component;
