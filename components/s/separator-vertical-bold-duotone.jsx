import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/m/mcno18bmy.css';
import '../../css/i/i92g2uadp.css';
import '../../css/g/gtnoc3_rf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="mcno18bmy"/><path class="i92g2uadp"/></g><path class="gtnoc3_rf"/></g>`,
		"fallback": "solar:separator-vertical-bold-duotone",
	});
}

export default Component;
