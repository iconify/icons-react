import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lno0446aq.css';
import '../../css/q/q1dwl61-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lno0446aq"/><path class="q1dwl61-n"/></g>`,
		"fallback": "coolicons:tornado-duocolor-round",
	});
}

export default Component;
