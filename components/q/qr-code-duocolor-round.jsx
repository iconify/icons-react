import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jcvgmbc_x.css';
import '../../css/i/ikeip8-bo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jcvgmbc_x"/><path class="ikeip8-bo"/></g>`,
		"fallback": "coolicons:qr-code-duocolor-round",
	});
}

export default Component;
