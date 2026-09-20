import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d3g6babwz.css';
import '../../css/v/v-3-4obmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d3g6babwz"/><path class="v-3-4obmb"/></g>`,
		"fallback": "keyline-icons:watch-two-tone",
	});
}

export default Component;
