import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wbmm5u2vb.css';
import '../../css/a/aob6o6blk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wbmm5u2vb"/><path class="aob6o6blk"/></g>`,
		"fallback": "coolicons:synagogue-duocolor-round",
	});
}

export default Component;
