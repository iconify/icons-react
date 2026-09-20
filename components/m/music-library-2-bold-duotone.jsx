import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y_rajo9ac.css';
import '../../css/y/y0p50bbsn.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/o/oqzbv9bha.css';
import '../../css/f/fxy57tbhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y_rajo9ac"/><path clip-rule="evenodd" class="y0p50bbsn"/><g class="mc2zb0bvp"><path class="oqzbv9bha"/><path class="fxy57tbhk"/></g></g>`,
		"fallback": "solar:music-library-2-bold-duotone",
	});
}

export default Component;
