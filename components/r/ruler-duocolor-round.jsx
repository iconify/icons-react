import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eba0prbjj.css';
import '../../css/q/qmj5syb0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eba0prbjj"/><path class="qmj5syb0p"/></g>`,
		"fallback": "coolicons:ruler-duocolor-round",
	});
}

export default Component;
