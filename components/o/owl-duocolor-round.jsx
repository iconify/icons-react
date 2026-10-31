import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lyrljtv-p.css';
import '../../css/v/vr4jlwbtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lyrljtv-p"/><path class="vr4jlwbtq"/></g>`,
		"fallback": "coolicons:owl-duocolor-round",
	});
}

export default Component;
