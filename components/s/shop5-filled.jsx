import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r4jalzb-m.css';
import '../../css/g/gxsmbibbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r4jalzb-m"/><path class="gxsmbibbh"/></g>`,
		"fallback": "reicon:shop5-filled",
	});
}

export default Component;
