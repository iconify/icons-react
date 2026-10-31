import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nmvep2rrm.css';
import '../../css/j/jps-wcf_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nmvep2rrm"/><path class="jps-wcf_l"/></g>`,
		"fallback": "coolicons:text-wrap-duocolor-round",
	});
}

export default Component;
