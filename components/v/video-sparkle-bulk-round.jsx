import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ilgp8dblk.css';
import '../../css/k/kmqnuibxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ilgp8dblk"/><path class="kmqnuibxa"/></g>`,
		"fallback": "coolicons:video-sparkle-bulk-round",
	});
}

export default Component;
