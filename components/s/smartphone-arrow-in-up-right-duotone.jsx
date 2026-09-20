import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u52ozydly.css';
import '../../css/n/n0zx2_bbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u52ozydly"/><path class="n0zx2_bbv"/></g>`,
		"fallback": "keyline-icons:smartphone-arrow-in-up-right-duotone",
	});
}

export default Component;
