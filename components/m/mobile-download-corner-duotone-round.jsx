import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a_rv6p-kh.css';
import '../../css/e/e7utdls-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a_rv6p-kh"/><path class="e7utdls-x"/></g>`,
		"fallback": "coolicons:mobile-download-corner-duotone-round",
	});
}

export default Component;
