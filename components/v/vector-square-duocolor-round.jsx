import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ys0eq-b5g.css';
import '../../css/f/f_tftibfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ys0eq-b5g"/><path class="f_tftibfv"/></g>`,
		"fallback": "coolicons:vector-square-duocolor-round",
	});
}

export default Component;
