import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mzp6wqb3w.css';
import '../../css/t/tx254pblf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mzp6wqb3w"/><path class="tx254pblf"/></g>`,
		"fallback": "keyline-icons:receipt-duotone",
	});
}

export default Component;
