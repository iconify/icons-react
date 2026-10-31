import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/ddvj3xgfq.css';
import '../../css/p/pa47yojdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ddvj3xgfq"/><path class="pa47yojdo"/></g>`,
		"fallback": "coolicons:video-duotone-round",
	});
}

export default Component;
