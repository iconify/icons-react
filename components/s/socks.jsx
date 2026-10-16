import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/le_0vcbtx.css';
import '../../css/e/en2czxdod.css';
import '../../css/c/cya5rab3t.css';
import '../../css/v/vi6g8th6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="le_0vcbtx"/><path class="en2czxdod"/><path class="cya5rab3t"/><path class="vi6g8th6c"/></g>`,
		"fallback": "andrsrxn:socks",
	});
}

export default Component;
