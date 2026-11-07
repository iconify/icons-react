import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbsq1h93u.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/g/gg3lrpbex.css';
import '../../css/u/uo4fesb6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sbsq1h93u"/><g class="xtpeb-edw"><path class="gg3lrpbex"/><path class="uo4fesb6x"/></g>`,
		"fallback": "solar:soundwave-bold-duotone",
	});
}

export default Component;
