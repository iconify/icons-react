import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g7zneobts.css';
import '../../css/u/u_oq_nbep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g7zneobts"/><path class="u_oq_nbep"/></g>`,
		"fallback": "majesticons:microphone",
	});
}

export default Component;
