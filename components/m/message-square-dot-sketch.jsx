import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/blrw_ccba.css';
import '../../css/v/vrq2xh5oj.css';
import '../../css/z/zf8t9262c.css';
import '../../css/h/h0tlrdy7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="blrw_ccba"/><path class="vrq2xh5oj wm-k"/><path class="wm-k zf8t9262c"/><path class="h0tlrdy7i wm-s"/></g>`,
		"fallback": "withicons:message-square-dot-sketch",
	});
}

export default Component;
