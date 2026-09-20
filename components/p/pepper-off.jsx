import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u2d0iyzci.css';
import '../../css/u/usz06lu6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u2d0iyzci"/><path class="usz06lu6n"/></g>`,
		"fallback": "tabler:pepper-off",
	});
}

export default Component;
