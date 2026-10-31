import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ikuhedoan.css';
import '../../css/q/qn_u12b2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ikuhedoan"/><path class="qn_u12b2i"/></g>`,
		"fallback": "coolicons:list-check-duocolor-round",
	});
}

export default Component;
