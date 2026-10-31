import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yslnx84sq.css';
import '../../css/w/w23wm3bzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yslnx84sq"/><path class="w23wm3bzq"/></g>`,
		"fallback": "coolicons:link-horizontal-off-duocolor-round",
	});
}

export default Component;
