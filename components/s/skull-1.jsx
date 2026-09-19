import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zp7a1qy_q.css';
import '../../css/f/fi8_qr5yv.css';
import '../../css/d/d_p_uxhob.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zp7a1qy_q"/><path class="fi8_qr5yv"/><path class="d_p_uxhob"/></g>`,
		"fallback": "glyphs-poly:skull-1",
	});
}

export default Component;
