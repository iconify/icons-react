import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fi-dz7g9z.css';
import '../../css/z/zxk7_zbjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fi-dz7g9z"/><path class="zxk7_zbjo"/></g>`,
		"fallback": "coolicons:square-chevron-up-duocolor-round",
	});
}

export default Component;
