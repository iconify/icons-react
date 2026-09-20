import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n2-r16zkh.css';
import '../../css/i/imo26mlcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n2-r16zkh"/><path class="imo26mlcc"/></g>`,
		"fallback": "tabler:table-heart",
	});
}

export default Component;
