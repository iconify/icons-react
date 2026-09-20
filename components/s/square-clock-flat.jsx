import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bjl2y6b8n.css';
import '../../css/s/svx6rpzch.css';
import '../../css/x/xv5ziabia.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bjl2y6b8n"/><path class="svx6rpzch"/><path clip-rule="evenodd" class="xv5ziabia"/></g>`,
		"fallback": "streamline-color:square-clock-flat",
	});
}

export default Component;
