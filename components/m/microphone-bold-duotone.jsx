import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xgel_z4sw.css';
import '../../css/u/uos8l6bgq.css';
import '../../css/v/vtjj0vb0d.css';
import '../../css/i/iav18tmdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xgel_z4sw"/><path class="uos8l6bgq"/><path class="vtjj0vb0d"/><path class="iav18tmdz"/></g>`,
		"fallback": "solar:microphone-bold-duotone",
	});
}

export default Component;
