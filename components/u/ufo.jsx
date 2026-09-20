import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oe49qz9fj.css';
import '../../css/b/b0zr17bxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oe49qz9fj"/><path class="b0zr17bxl"/></g>`,
		"fallback": "tabler:ufo",
	});
}

export default Component;
