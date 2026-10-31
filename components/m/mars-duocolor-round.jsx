import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r805trlnc.css';
import '../../css/v/vde49ebwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r805trlnc"/><path class="vde49ebwh"/></g>`,
		"fallback": "coolicons:mars-duocolor-round",
	});
}

export default Component;
