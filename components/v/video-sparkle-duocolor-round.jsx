import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pyg-o2byd.css';
import '../../css/n/n_yeefbjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pyg-o2byd"/><path class="n_yeefbjk"/></g>`,
		"fallback": "coolicons:video-sparkle-duocolor-round",
	});
}

export default Component;
