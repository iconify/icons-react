import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hb--q-qwh.css';
import '../../css/j/jurinlblr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hb--q-qwh"/><path class="jurinlblr"/></g>`,
		"fallback": "tabler:message-circle-question",
	});
}

export default Component;
