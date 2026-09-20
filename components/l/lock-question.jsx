import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g5dtptb4c.css';
import '../../css/n/nlqtxf_da.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g5dtptb4c"/><path class="nlqtxf_da"/></g>`,
		"fallback": "tabler:lock-question",
	});
}

export default Component;
