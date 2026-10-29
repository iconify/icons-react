import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/ngc7rqivy.css';
import '../../css/t/t8a6dybzk.css';
import '../../css/m/mk4038byc.css';
import '../../css/c/c9ke8ubkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ngc7rqivy wm-k"/><path class="t8a6dybzk wm-a"/><path class="mk4038byc wm-k"/><path class="c9ke8ubkk wm-a"/></g>`,
		"fallback": "withicons:subscript-sketch",
	});
}

export default Component;
