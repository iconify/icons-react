import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rj_8g4vod.css';
import '../../css/a/ajag6ggvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rj_8g4vod"/><path class="ajag6ggvt"/></g>`,
		"fallback": "coolicons:medal-duocolor-round",
	});
}

export default Component;
