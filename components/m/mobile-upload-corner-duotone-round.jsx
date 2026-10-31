import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a_rv6p-kh.css';
import '../../css/w/woao9qv_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a_rv6p-kh"/><path class="woao9qv_b"/></g>`,
		"fallback": "coolicons:mobile-upload-corner-duotone-round",
	});
}

export default Component;
