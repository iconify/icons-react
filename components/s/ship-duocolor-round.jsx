import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nta9uvt4z.css';
import '../../css/e/e9j53gb9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nta9uvt4z"/><path class="e9j53gb9p"/></g>`,
		"fallback": "coolicons:ship-duocolor-round",
	});
}

export default Component;
