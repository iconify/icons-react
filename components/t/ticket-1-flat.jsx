import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zqpdoccse.css';
import '../../css/y/yaul28b5w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zqpdoccse"/><path clip-rule="evenodd" class="yaul28b5w"/></g>`,
		"fallback": "streamline-plump-color:ticket-1-flat",
	});
}

export default Component;
