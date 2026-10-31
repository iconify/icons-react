import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l9ut5ilwr.css';
import '../../css/f/fojsc7d2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l9ut5ilwr"/><path class="fojsc7d2n"/></g>`,
		"fallback": "coolicons:mail-duocolor-round",
	});
}

export default Component;
