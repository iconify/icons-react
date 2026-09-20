import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/npwi3zyxu.css';
import '../../css/n/nmtu78ywq.css';
import '../../css/t/tncdwr-8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="npwi3zyxu"/><path class="nmtu78ywq"/><path class="tncdwr-8l"/></g>`,
		"fallback": "pixelarticons:music-sharp",
	});
}

export default Component;
