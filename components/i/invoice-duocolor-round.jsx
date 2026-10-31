import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/slqbdqt9w.css';
import '../../css/t/tfi6fcbzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="slqbdqt9w"/><path class="tfi6fcbzc"/></g>`,
		"fallback": "coolicons:invoice-duocolor-round",
	});
}

export default Component;
