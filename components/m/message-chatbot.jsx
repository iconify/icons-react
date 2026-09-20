import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h0j1wk1lp.css';
import '../../css/y/y6ozgiboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h0j1wk1lp"/><path class="y6ozgiboo"/></g>`,
		"fallback": "tabler:message-chatbot",
	});
}

export default Component;
