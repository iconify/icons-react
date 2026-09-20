import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j3ckz-_ie.css';
import '../../css/o/oy1ei0h3g.css';
import '../../css/w/wf89k6buf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j3ckz-_ie"/><path class="oy1ei0h3g"/><path class="wf89k6buf"/></g>`,
		"fallback": "solar:panel-top-close-bold-duotone",
	});
}

export default Component;
