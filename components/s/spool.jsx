import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d3wfcrbur.css';
import '../../css/e/ebkyfnbgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d3wfcrbur"/><path class="ebkyfnbgh"/></g>`,
		"fallback": "lucide:spool",
	});
}

export default Component;
