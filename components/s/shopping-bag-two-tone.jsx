import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l5418ebau.css';
import '../../css/l/l-hh_1b7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l5418ebau"/><path class="l-hh_1b7r"/></g>`,
		"fallback": "keyline-icons:shopping-bag-two-tone",
	});
}

export default Component;
