import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s5zc1vb8y.css';
import '../../css/d/d8meufkqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s5zc1vb8y"/><path class="d8meufkqa"/></g>`,
		"fallback": "keyline-icons:layers-duotone",
	});
}

export default Component;
