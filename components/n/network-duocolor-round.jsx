import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ycao8bsrk.css';
import '../../css/o/ok0pdobun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ycao8bsrk"/><path class="ok0pdobun"/></g>`,
		"fallback": "coolicons:network-duocolor-round",
	});
}

export default Component;
