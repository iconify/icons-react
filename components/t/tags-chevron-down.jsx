import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vt6cmib4p.css';
import '../../css/t/t5yzvxbyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vt6cmib4p"/><path class="t5yzvxbyc"/></g>`,
		"fallback": "tabler:tags-chevron-down",
	});
}

export default Component;
