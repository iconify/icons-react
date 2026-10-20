import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rp5kndbph.css';
import '../../css/o/oln7pibrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rp5kndbph"/><path class="oln7pibrk"/></g>`,
		"fallback": "vadivam:map-pin-house",
	});
}

export default Component;
