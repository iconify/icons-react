import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tom0rnb2s.css';
import '../../css/b/bqycojb_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tom0rnb2s"/><path class="bqycojb_m"/></g>`,
		"fallback": "coolicons:square-dashed-square-top-left-duocolor-round",
	});
}

export default Component;
