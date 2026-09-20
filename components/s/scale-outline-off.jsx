import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ebg_1ub8s.css';
import '../../css/u/ufh-d8b8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ebg_1ub8s"/><path class="ufh-d8b8s"/></g>`,
		"fallback": "tabler:scale-outline-off",
	});
}

export default Component;
