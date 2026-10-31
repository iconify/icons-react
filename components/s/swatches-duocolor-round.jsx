import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dx7ns0bfk.css';
import '../../css/k/kigplb64b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dx7ns0bfk"/><path class="kigplb64b"/></g>`,
		"fallback": "coolicons:swatches-duocolor-round",
	});
}

export default Component;
