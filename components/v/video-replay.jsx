import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/l27uvzhmn.css';
import '../../css/g/gdtg0abfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="l27uvzhmn"/><path class="gdtg0abfx"/></g>`,
		"fallback": "hugeicons:video-replay",
	});
}

export default Component;
