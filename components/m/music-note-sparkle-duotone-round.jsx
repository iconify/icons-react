import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zqmeghb9f.css';
import '../../css/j/jy46gsowv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zqmeghb9f"/><path class="jy46gsowv"/></g>`,
		"fallback": "coolicons:music-note-sparkle-duotone-round",
	});
}

export default Component;
