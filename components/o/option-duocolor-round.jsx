import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xshfmibey.css';
import '../../css/e/eb6ap2nsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xshfmibey"/><path class="eb6ap2nsn"/></g>`,
		"fallback": "coolicons:option-duocolor-round",
	});
}

export default Component;
