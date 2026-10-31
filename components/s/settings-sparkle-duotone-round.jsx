import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/ba68nqhnu.css';
import '../../css/r/rn-2g5buv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ba68nqhnu"/><path class="rn-2g5buv"/></g>`,
		"fallback": "coolicons:settings-sparkle-duotone-round",
	});
}

export default Component;
