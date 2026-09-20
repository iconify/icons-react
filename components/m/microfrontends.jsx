import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c74mi4b0x.css';
import '../../css/e/e-bnx6bbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c74mi4b0x"/><path class="e-bnx6bbh"/></g>`,
		"fallback": "tabler:microfrontends",
	});
}

export default Component;
