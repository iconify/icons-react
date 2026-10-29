import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sa3sy8x8r.css';
import '../../css/q/q_qo_wbme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sa3sy8x8r"/><path class="q_qo_wbme"/></g>`,
		"fallback": "withicons:share-sketch",
	});
}

export default Component;
