import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g2f-bwdyl.css';
import '../../css/z/zjny6ub8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g2f-bwdyl"/><path class="zjny6ub8u"/></g>`,
		"fallback": "coolicons:search-duocolor-round",
	});
}

export default Component;
