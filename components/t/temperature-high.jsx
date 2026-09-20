import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lszba4b2p.css';
import '../../css/u/u8_q54bsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lszba4b2p"/><path class="u8_q54bsb"/></g>`,
		"fallback": "keyline-icons:temperature-high",
	});
}

export default Component;
