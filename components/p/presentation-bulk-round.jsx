import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qr_62qvog.css';
import '../../css/i/i11ylvpcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qr_62qvog"/><path class="i11ylvpcu"/></g>`,
		"fallback": "coolicons:presentation-bulk-round",
	});
}

export default Component;
