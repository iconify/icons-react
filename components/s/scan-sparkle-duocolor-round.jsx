import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/feo-1jb0f.css';
import '../../css/l/ly44l6qmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="feo-1jb0f"/><path class="ly44l6qmn"/></g>`,
		"fallback": "coolicons:scan-sparkle-duocolor-round",
	});
}

export default Component;
