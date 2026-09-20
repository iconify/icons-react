import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u7yp8z79v.css';
import '../../css/h/hvh3zkbtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u7yp8z79v"/><path class="hvh3zkbtb"/></g>`,
		"fallback": "tabler:tower",
	});
}

export default Component;
