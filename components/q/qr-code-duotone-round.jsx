import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncepds1ev.css';
import '../../css/q/q8x3xb5-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ncepds1ev"/><path class="q8x3xb5-j"/></g>`,
		"fallback": "coolicons:qr-code-duotone-round",
	});
}

export default Component;
