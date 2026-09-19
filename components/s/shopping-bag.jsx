import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/werljkcpt.css';
import '../../css/k/kt63hcb8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="werljkcpt"/><path class="kt63hcb8u"/></g>`,
		"fallback": "feather:shopping-bag",
	});
}

export default Component;
