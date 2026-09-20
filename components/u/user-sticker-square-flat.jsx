import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jtxvrwghe.css';
import '../../css/z/zx7n4cm_b.css';
import '../../css/m/mx-_0ybfu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jtxvrwghe"/><path clip-rule="evenodd" class="zx7n4cm_b"/><path class="mx-_0ybfu"/></g>`,
		"fallback": "streamline-plump-color:user-sticker-square-flat",
	});
}

export default Component;
