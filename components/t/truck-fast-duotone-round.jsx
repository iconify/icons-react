import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bqz58uvcg.css';
import '../../css/i/ig9sdifwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bqz58uvcg"/><path class="ig9sdifwo"/></g>`,
		"fallback": "coolicons:truck-fast-duotone-round",
	});
}

export default Component;
