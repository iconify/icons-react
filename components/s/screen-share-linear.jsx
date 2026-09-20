import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e71p8bxkf.css';
import '../../css/g/g_eh3ebdg.css';
import '../../css/z/zgwn8jw0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e71p8bxkf"/><path class="g_eh3ebdg"/><path class="zgwn8jw0r"/></g>`,
		"fallback": "solar:screen-share-linear",
	});
}

export default Component;
