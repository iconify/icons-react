import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yjbho5b4r.css';
import '../../css/x/xv9fwsbfa.css';
import '../../css/l/ltey99hig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yjbho5b4r"/><path class="xv9fwsbfa"/><path class="ltey99hig"/></g>`,
		"fallback": "solar:move-horizontal-bold-duotone",
	});
}

export default Component;
