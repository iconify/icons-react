import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k0m1h-b7b.css';
import '../../css/z/ziz_ldx2p.css';
import '../../css/j/jgda5jb8u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k0m1h-b7b"/><path class="ziz_ldx2p"/><path clip-rule="evenodd" class="jgda5jb8u"/></g>`,
		"fallback": "streamline-color:orientation-portrait-flat",
	});
}

export default Component;
