import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/po66f8bac.css';
import '../../css/y/y0ic-ietd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="po66f8bac"/><path class="y0ic-ietd"/></g>`,
		"fallback": "tabler:mountain",
	});
}

export default Component;
