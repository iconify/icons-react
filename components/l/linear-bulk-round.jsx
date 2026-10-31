import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x4l47ab3d.css';
import '../../css/w/wrwlekzhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x4l47ab3d"/><path class="wrwlekzhx"/></g>`,
		"fallback": "coolicons:linear-bulk-round",
	});
}

export default Component;
