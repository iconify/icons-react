import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/swxpchwbl.css';
import '../../css/p/p-296neyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="swxpchwbl"/><path class="p-296neyi"/></g>`,
		"fallback": "vadivam:rotate-cw-square",
	});
}

export default Component;
