import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bjl2y6b8n.css';
import '../../css/i/id3p7nm2z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bjl2y6b8n"/><path clip-rule="evenodd" class="id3p7nm2z"/></g>`,
		"fallback": "streamline-color:layout-window-11-flat",
	});
}

export default Component;
