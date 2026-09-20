import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zimyt6t2s.css';
import '../../css/h/h8b21yvqe.css';
import '../../css/o/odwhs5n2d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zimyt6t2s"/><path clip-rule="evenodd" class="h8b21yvqe"/><path clip-rule="evenodd" class="odwhs5n2d"/></g>`,
		"fallback": "streamline-plump-color:share-lock-flat",
	});
}

export default Component;
