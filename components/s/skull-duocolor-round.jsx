import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sdsm8gb8e.css';
import '../../css/s/s5_e1qyfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sdsm8gb8e"/><path class="s5_e1qyfn"/></g>`,
		"fallback": "coolicons:skull-duocolor-round",
	});
}

export default Component;
