import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zc9yrzbrg.css';
import '../../css/i/ihhy5kb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zc9yrzbrg"/><path class="ihhy5kb9w"/></g>`,
		"fallback": "coolicons:volume-high-duocolor-round",
	});
}

export default Component;
