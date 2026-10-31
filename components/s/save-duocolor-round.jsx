import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wn8i1hruc.css';
import '../../css/r/r1etxz8pb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wn8i1hruc"/><path class="r1etxz8pb"/></g>`,
		"fallback": "coolicons:save-duocolor-round",
	});
}

export default Component;
