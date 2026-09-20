import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/h_y5-9y1k.css';
import '../../css/r/rdn5ltbwu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="h_y5-9y1k"/><path class="rdn5ltbwu"/></g>`,
		"fallback": "streamline-color:vr-headset-1-flat",
	});
}

export default Component;
