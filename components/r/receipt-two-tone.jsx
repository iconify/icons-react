import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mzp6wqb3w.css';
import '../../css/s/spsvkm9ev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mzp6wqb3w"/><path class="spsvkm9ev"/></g>`,
		"fallback": "keyline-icons:receipt-two-tone",
	});
}

export default Component;
