import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k91quvb3g.css';
import '../../css/z/znw6c5bfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="k91quvb3g"/><path class="znw6c5bfs"/></g>`,
		"fallback": "iconamoon:settings-bold",
	});
}

export default Component;
