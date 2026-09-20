import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/b/bup-zx81n.css';
import '../../css/q/qv2vvh1fh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="bup-zx81n"/><path class="qv2vvh1fh"/></g>`,
		"fallback": "solar:move-square-bold-duotone",
	});
}

export default Component;
