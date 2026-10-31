import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c5ky8wsla.css';
import '../../css/h/h5b29obqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c5ky8wsla"/><path class="h5b29obqj"/></g>`,
		"fallback": "coolicons:slider-3-duocolor-round",
	});
}

export default Component;
