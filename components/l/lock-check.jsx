import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kdcdqb7xa.css';
import '../../css/y/ya047-3ig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kdcdqb7xa"/><path class="ya047-3ig"/></g>`,
		"fallback": "tabler:lock-check",
	});
}

export default Component;
