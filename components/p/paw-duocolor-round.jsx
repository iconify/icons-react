import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y9k696pnq.css';
import '../../css/w/wqx177b_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y9k696pnq"/><path class="wqx177b_i"/></g>`,
		"fallback": "coolicons:paw-duocolor-round",
	});
}

export default Component;
