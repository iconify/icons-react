import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mxb6qpp2u.css';
import '../../css/i/i_5socbve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mxb6qpp2u"/><path class="i_5socbve"/></g>`,
		"fallback": "coolicons:toggle-right-duocolor-round",
	});
}

export default Component;
