import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/w/wbmr1-bmv.css';
import '../../css/t/tlu_9ubfk.css';
import '../../css/r/rvy95yb6l.css';
import '../../css/i/i0xyrdvtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="wbmr1-bmv"/><path class="tlu_9ubfk"/></g><path class="rvy95yb6l"/><path class="i0xyrdvtv"/></g>`,
		"fallback": "solar:unlink-bold-duotone",
	});
}

export default Component;
