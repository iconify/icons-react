import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o23jajbsf.css';
import '../../css/n/nkgnaccau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o23jajbsf"/><path class="nkgnaccau"/></g>`,
		"fallback": "tabler:shopping-bag-exclamation",
	});
}

export default Component;
