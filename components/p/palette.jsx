import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nxu0v3bxr.css';
import '../../css/z/zy8o7sw2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nxu0v3bxr"/><path class="zy8o7sw2m"/></g>`,
		"fallback": "tabler:palette",
	});
}

export default Component;
