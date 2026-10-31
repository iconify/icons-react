import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qgm4y23bk.css';
import '../../css/p/p2y3b78rw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qgm4y23bk"/><path class="p2y3b78rw"/></g>`,
		"fallback": "coolicons:layer-duocolor-round",
	});
}

export default Component;
